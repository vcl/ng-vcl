import {
  Injector,
  NgZone,
  TemplateRef,
  ViewContainerRef,
  ComponentRef,
  EmbeddedViewRef,
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { take, switchMap, filter, map } from 'rxjs/operators';
import { merge, NEVER, Subject, Subscription } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { Layer, LayerConfig, LayerData } from './types';
import {
  ComponentType,
  Portal,
  ComponentPortal,
  TemplatePortal,
} from '@angular/cdk/portal';

type PortalType<TLayerRefType, TContextOrComponent> =
  TLayerRefType extends 'component'
    ? ComponentPortal<TContextOrComponent>
    : TLayerRefType extends 'template'
    ? TemplatePortal<TContextOrComponent>
    : Portal<any>;

type AttachmentType<TLayerRefType, TContext> = TLayerRefType extends 'component'
  ? ComponentRef<TContext>
  : TLayerRefType extends 'template'
  ? EmbeddedViewRef<TContext>
  : any;

export abstract class LayerRef<
  TLayerData extends LayerData = any,
  TResult = any,
  TContext = any,
  TLayerRefType extends 'component' | 'template' | 'dynamic' = 'dynamic'
> implements Layer
{
  constructor(protected injector: Injector) {
    this._zone = injector.get(NgZone);
    this._overlay = injector.get(Overlay);
  }

  private _requestDetachEmitter: Subject<TResult> = new Subject();
  private _attachmentRef?: AttachmentType<TLayerRefType, TContext>;
  private _overlayRef?: OverlayRef;
  private _isDestroyed = false;
  private _portal: PortalType<TLayerRefType, TContext>;

  private _zone: NgZone;
  private _overlay: Overlay;
  private _layerOpenedSub?: Subscription;
  private _afterClose = new Subject<TResult | undefined>();

  private _currentConfig: LayerConfig;

  afterClose = this._afterClose.asObservable();

  get isVisible() {
    return this.isAttached;
  }

  get data(): TLayerData {
    return this._currentConfig.data;
  }

  protected get isAttached() {
    return !!this.overlayRef && this.overlayRef.hasAttached();
  }

  protected get overlayRef() {
    return this._overlayRef;
  }

  protected get portal() {
    return this._portal;
  }

  protected get attachmentRef() {
    return this._attachmentRef;
  }

  protected get isDestroyed() {
    return this._isDestroyed;
  }

  toggle() {
    if (this.isAttached) {
      this.close();
    } else {
      this.open();
    }
  }

  protected createLayerConfig(...configs: LayerConfig[]): LayerConfig {
    const defaultConfig = new LayerConfig({
      closeOnBackdropClick: true,
      closeOnEscape: true,
      scrollStrategy: this._overlay.scrollStrategies.block(),
      hasBackdrop: true,
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    const config = [defaultConfig, ...configs].reduce((agg, config) => {
      return {
        ...agg,
        ...config,
      };
    }, {});

    const panelClass = ['layer-box'];

    if (Array.isArray(config.panelClass)) {
      panelClass.push(...config.panelClass);
    } else if (typeof config.panelClass === 'string') {
      panelClass.push(config.panelClass);
    }

    config.panelClass = panelClass;
  
    return new LayerConfig(config);
  }

  protected abstract createPortal(): PortalType<TLayerRefType, TContext>;
  protected abstract updatePortal(): PortalType<TLayerRefType, TContext>;

  close(result?: TResult) {
    if (!this.isAttached) {
      return;
    }

    this._requestDetachEmitter.next(result);
  }

  open(config?: LayerConfig) {
    if (this.isDestroyed) {
      throw new Error('Cannot attach destroyed layer');
    }

    this._currentConfig = this.createLayerConfig(config);

    if (!this.overlayRef) {
      const injector = this.injector;
      const overlay = injector.get(Overlay);
      this._overlayRef = overlay.create(this._currentConfig);

    } else {
      if (this._currentConfig.scrollStrategy) {
        this._overlayRef.updateScrollStrategy(
          this._currentConfig.scrollStrategy
        );
      }
      if (this._currentConfig.direction) {
        this._overlayRef.setDirection(this._currentConfig.direction);
      }
      if (this._currentConfig.positionStrategy) {
        this._overlayRef.updatePositionStrategy(
          this._currentConfig.positionStrategy
        );
      }
    }

    if (!this._portal) {
      this._portal = this.createPortal();
    } else {
      this._portal = this.updatePortal();
    }


    this._overlayRef.hostElement.setAttribute('class', 'layer');

    if (!this.isAttached) {
      this._attachmentRef = this.overlayRef.attach(this._portal);
  
      // @ts-ignore
      merge<TResult>(
        // Called when detached via detach() method
        this._requestDetachEmitter.asObservable(),
        // Called when detached from anywhere else
        this._overlayRef.detachments().pipe(map(() => undefined))
      )
        .pipe(
          take(1) // Take 1 to make sure cleanup is only done once
        )
        .subscribe(result => {
          // The overlay is not detached after an event from the request emitter
          if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
          }
          this._attachmentRef = undefined;
          this._layerOpenedSub && this._layerOpenedSub.unsubscribe();
          // @ts-ignore
          this._afterClose.next(result);

          // @ts-ignore
          this.afterDetached(result);
        });

      this._layerOpenedSub = this._zone.onStable
        .asObservable()
        .pipe(take(1))
        .pipe(
          switchMap(() => {
            const closeOnEscape = this._currentConfig.closeOnEscape ?? true;
            const closeOnBackdropClick =
              this._currentConfig.hasBackdrop &&
              (this._currentConfig.closeOnBackdropClick ?? true);
            return merge(
              closeOnEscape
                ? this.overlayRef.keydownEvents().pipe(
                    filter(event => {
                      return event.keyCode === ESCAPE;
                    })
                  )
                : NEVER,
              closeOnBackdropClick ? this.overlayRef.backdropClick() : NEVER
            );
          })
        )
        .subscribe(() => {
          this.close();
        });

      this.afterAttached();
    }
    return this.afterClose.pipe(take(1));
  }

  protected afterAttached(): void {}

  protected afterDetached(result?: TResult): void {}

  public updatePosition() {
    this._overlayRef.updatePosition();
  }

  public destroy() {
    this._isDestroyed = true;
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = undefined;
    }
    this._afterClose.complete();
  }
}

export abstract class ComponentLayerRef<
  TLayerData extends LayerData = any,
  TResult = any,
  TComponent = any
> extends LayerRef<TLayerData, TResult, TComponent, 'component'> {
  protected abstract getComponent(): ComponentType<LayerData>;
  private stateChangedEmitter = new Subject();
  stateChanged = this.stateChangedEmitter.asObservable();

  protected createPortal() {
    const injector = this.createInjector();
    return new ComponentPortal(this.getComponent(), null, injector);
  }

  protected updatePortal() {
    this.stateChangedEmitter.next(undefined);
    return this.portal;
  }

  protected createInjector() {
    return Injector.create(
      [
        {
          provide: LayerRef,
          useValue: this,
        },
        {
          provide: ComponentLayerRef,
          useValue: this,
        },
        {
          provide: this.constructor,
          useValue: this,
        },
      ],
      this.injector
    );
  }
}

export abstract class TemplateLayerRef<
  TLayerData extends LayerData = any,
  TResult = any
> extends LayerRef<TLayerData, TResult, LayerData, 'template'> {
  protected abstract get templateRef(): TemplateRef<TLayerData>;
  protected abstract get viewContainerRef(): ViewContainerRef;

  protected createPortal() {
    return new TemplatePortal<TLayerData>(
      this.templateRef,
      this.viewContainerRef,
      this.data
    );
  }

  protected updatePortal() {
    if (this.portal.isAttached) {
      this.portal.detach();
    }
    return new TemplatePortal<TLayerData>(
      this.templateRef,
      this.viewContainerRef,
      this.data
    );
  }
}

export interface DynamicLayerParams {
  injector: Injector;
  templateOrComponent: TemplateRef<any> | ComponentType<any>;
  viewContainerRef?: ViewContainerRef;
  config?: LayerConfig;
}
