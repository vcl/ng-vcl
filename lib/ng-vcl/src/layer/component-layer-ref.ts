import { Injector, NgZone, ComponentRef, ViewContainerRef } from '@angular/core';
import { ComponentPortal, PortalInjector, ComponentType } from '@angular/cdk/portal';
import { OverlayConfig, Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { take, switchMap, filter } from 'rxjs/operators';
import { merge, NEVER, Subject, Subscription } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { LayerRef } from './layer-ref';

type ComponentLayerRefCtor<TComponent> = new(component: ComponentType<TComponent>, zone: NgZone, injector: Injector, opts: CreateLayerOptions<TComponent>) => ComponentLayerRef;

export interface LayerOptions {
  position?: PositionStrategy;
}

export interface CreateLayerOptions<TComponent> extends LayerOptions {
  viewContainerRef?: ViewContainerRef;
  useClass?: ComponentLayerRefCtor<TComponent>;
  modal?: boolean;
}


export class ComponentLayerRef<TComponent = any, TData = any, TResult = any> extends LayerRef<TResult> {

  constructor(private componentType: ComponentType<TComponent>, private zone: NgZone, protected injector: Injector, private opts: CreateLayerOptions<TComponent> = {}) {
    super();
    this.overlay = injector.get(Overlay);
  }

  private layerOpenedSub?: Subscription;
  private _afterClose: Subject<TResult | null> = new Subject();

  protected overlay: Overlay;
  protected portal: ComponentPortal<TComponent>;
  protected attachmentRef?: ComponentRef<TComponent>;

  afterClose = this._afterClose.asObservable();

  private _data: TData;

  get data() {
    return this._data;
  }

  get componentRef(): ComponentRef<TComponent> | undefined {
    return this.attachmentRef;
  }

  open(data?: TData, opts?: LayerOptions) {
    if (this.isAttached) {
      this.close();
    }

    // Merge defaults
    opts = { ...this.opts, ...opts};

    this._data = data;

    const config = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'vclLayerCover',
      panelClass: ['vclLayerBox', 'vclLayerBoxFix'],
      positionStrategy: opts.position || this.opts.position || this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    return this.attach(config);
  }

  close(result?: TResult) {
    return super.detach(result);
  }

  protected getInjector(): Injector {
    return this.injector;
  }

  protected createPortal(): ComponentPortal<TComponent> {
    const injectionTokens = new WeakMap();
    injectionTokens.set(ComponentLayerRef, this);
    const portalInjector = new PortalInjector(this.injector, injectionTokens);
    return new ComponentPortal<TComponent>(this.componentType, this.opts.viewContainerRef, portalInjector);
  }

  protected afterAttached(overlayRef: OverlayRef): void {
    this.layerOpenedSub = this.zone.onStable.asObservable().pipe(take(1)).pipe(switchMap(() => {
      return merge(this.opts.modal ? NEVER : overlayRef.keydownEvents().pipe(filter(event => {
        return event.keyCode === ESCAPE;
      })), this.opts.modal ? NEVER : overlayRef.backdropClick());
    })).subscribe(result => {
      super.detach();
    });
  }

  protected afterDetached(result: any, overlayRef: OverlayRef): void {
    this.layerOpenedSub && this.layerOpenedSub.unsubscribe();
    this._afterClose.next(result);
  }
}
