import { Injector, NgZone, TemplateRef, ViewContainerRef, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { take, switchMap, filter, map } from 'rxjs/operators';
import { merge, NEVER, Subject, Subscription } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { Layer, LayerConfig } from './types';
import { ComponentType, Portal, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

type PortalType<TLayerRefType, TType> =
    TLayerRefType extends 'component' ? ComponentPortal<TType> :
    TLayerRefType extends 'template' ? TemplatePortal<TType> :
    Portal<any>;

type AttachmentType<TLayerRefType, TType> =
    TLayerRefType extends 'component' ? ComponentRef<TType> :
    TLayerRefType extends 'template' ? EmbeddedViewRef<TType> :
    any;

export abstract class LayerRef<TData = any, TResult = any, TType = any, TLayerRefType extends 'component' | 'template' | 'dynamic' = 'dynamic'> implements Layer {

  constructor(protected injector: Injector) {
    this._zone = injector.get(NgZone);
    this._overlay = injector.get(Overlay);
  }

  private _requestDetachEmitter: Subject<TResult> = new Subject();
  private _attachmentRef?: AttachmentType<TLayerRefType, TType>;
  private _overlayRef?: OverlayRef;
  private _isDestroyed = false;
  private _portal: PortalType<TLayerRefType, TType>;

  private _zone: NgZone;
  private _overlay: Overlay;
  private _layerOpenedSub?: Subscription;
  private _afterClose = new Subject<TResult | undefined>();

  private _currentConfig: LayerConfig;

  afterClose = this._afterClose.asObservable();

  get isVisible() {
    return this.isAttached;
  }

  get data(): TData {
    return this._currentConfig.data;
  }

  protected get isAttached() {
    return !!this.overlayRef && this.overlayRef.hasAttached();
  }

  protected get overlayRef() {
    return this._overlayRef;
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

  protected getLayerConfig(): LayerConfig {
    return new LayerConfig({
      closeOnBackdropClick: false,
      closeOnEscape: false,
      scrollStrategy: this._overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'vclLayerCover',
      panelClass: ['vclLayerBox'],
      positionStrategy: this._overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

  open(config?: LayerConfig<TData>) {
    const defaultConfig = this.getLayerConfig();
    // Merge defaults
    this._currentConfig = new LayerConfig({
      ...defaultConfig,
      ...(config || {})
    });

    this.attach(this._currentConfig);

    return this.afterClose.pipe(take(1));
  }

  close(result?: TResult) {
    return this.detach(result);
  }

  protected abstract createPortal(): PortalType<TLayerRefType, TType>;

  private attach(config: OverlayConfig) {
    if (this.isDestroyed) {
      throw new Error('Cannot attach destroyed layer');
    }

    if (!this.overlayRef) {
      const injector = this.injector;
      const overlay = injector.get(Overlay);
      this._overlayRef = overlay.create(config);
    }

    if (!this._portal) {
      this._portal = this.createPortal();
    }

    if (!this.isAttached) {
      this._attachmentRef = this.overlayRef.attach(this._portal);

      merge<TResult>(
        // Called when detached via detach() method
        this._requestDetachEmitter.asObservable(),
        // Called when detached from anywhere else
        this._overlayRef.detachments().pipe(map(() => undefined)),
      ).pipe(
        take(1) // Take 1 to make sure cleanup is only done once
      ).subscribe((result) => {
        // The overlay is not detached after an event from the request emitter
        if (this.overlayRef && this.overlayRef.hasAttached()) {
          this.overlayRef.detach();
        }
        this._attachmentRef = undefined;
        this._layerOpenedSub && this._layerOpenedSub.unsubscribe();
        this._afterClose.next(result);

        this.afterDetached(result);
      });

      this._layerOpenedSub = this._zone.onStable.asObservable().pipe(take(1)).pipe(switchMap(() => {
        return merge(
          this._currentConfig.closeOnEscape ? NEVER : this.overlayRef.keydownEvents().pipe(
            filter(event => {
              return event.keyCode === ESCAPE;
            })
          ),
          (this._currentConfig.hasBackdrop && this._currentConfig.closeOnBackdropClick) ? NEVER : this.overlayRef.backdropClick()
        );
      })).subscribe(() => {
        this.detach();
      });

      this.afterAttached();
    } else {
      this._overlayRef.updatePositionStrategy(config.positionStrategy);
    }
  }

  private detach(result?: TResult) {
    if (!this.isAttached) {
      return;
    }
    this._requestDetachEmitter.next(result);
  }


  protected afterAttached(): void { }

  protected afterDetached(result?: TResult): void { }

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


export abstract class ComponentLayerRef<TData = any, TResult = any, TComponent = any> extends LayerRef<TData, TResult, TComponent, 'component'> {

  protected abstract get component(): ComponentType<TComponent>;

  protected createPortal() {
    const injector = this.createInjector();
    return new ComponentPortal(this.component, null, injector);
  }

  protected createInjector() {
    return Injector.create([{
      provide: LayerRef,
      useValue: this
    }, {
      provide: ComponentLayerRef,
      useValue: this
    } , {
      provide: this.constructor,
      useValue: this
    }], this.injector);
  }
}

export abstract class TemplateLayerRef<TData = any, TResult = any, TContext = any> extends LayerRef<TData, TResult, TContext, 'template'> {

  protected abstract get templateRef(): TemplateRef<TContext>;
  protected abstract get viewContainerRef(): ViewContainerRef;

  protected createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
  }
}

export interface DynamicLayerParams {
  injector: Injector;
  templateOrComponent: TemplateRef<any> | ComponentType<any>;
  viewContainerRef?: ViewContainerRef;
  config?: LayerConfig;
}

export class DynamicLayerRef extends LayerRef {

  constructor(private params: DynamicLayerParams) {
    super(params.injector);
  }

  protected createPortal() {
    if (this.params.templateOrComponent instanceof TemplateRef) {
      return new TemplatePortal(this.params.templateOrComponent, this.params.viewContainerRef);
    } else {
      const injector = this.createInjector();
      return new ComponentPortal(this.params.templateOrComponent, this.params.viewContainerRef, injector);
    }
  }

  getLayerConfig() {
    return this.params.config || super.getLayerConfig();
  }

  private createInjector() {
    return Injector.create([{
      provide: LayerRef,
      useValue: this
    }, {
      provide: ComponentLayerRef,
      useValue: this
    } , {
      provide: this.constructor,
      useValue: this
    }], this.injector);
  }
}
