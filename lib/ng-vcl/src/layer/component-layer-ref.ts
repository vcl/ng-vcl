import { Injector, NgZone } from '@angular/core';
import { ComponentPortal, PortalInjector, ComponentType } from '@angular/cdk/portal';
import { LayerRef } from './layer-ref';
import { OverlayConfig, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { take, switchMap, filter } from 'rxjs/operators';
import { merge, NEVER, Subject, Subscription } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { CreateLayerOptions } from './layer.service';
import { ComponentRef } from '@angular/core/src/render3';

export class ComponentLayerRef<TComponent = any, TData = any, TResult = any> extends LayerRef<TResult> {

  constructor(private componentType: ComponentType<TComponent>, private zone: NgZone, private injector: Injector, private defaultOpts: CreateLayerOptions<TComponent> = {}) {
    super();
    this.overlay = injector.get(Overlay);
    this.opts = {
      ...defaultOpts,
    };
  }

  opts: CreateLayerOptions<TComponent>;

  private overlay: Overlay;
  private layerOpenedSub?: Subscription;
  private _afterClose: Subject<TResult | null> = new Subject();

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

  open(data?: TData, opts?: CreateLayerOptions<TComponent>) {
    this.opts = {
      ...this.defaultOpts,
      ...opts
    };
    this._data = data;
    if (this.isAttached) {
      this.close();
      // this.componentRef.changeDetectorRef.markForCheck();
      // this.componentRef.changeDetectorRef.detectChanges();
    }
    return super.attach();
  }

  close(result?: TResult) {
    return super.detach(result);
  }

  protected getInjector(): Injector {
    return this.injector;
  }

  protected getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'vclLayerCover',
      panelClass: ['vclLayerBox', 'vclLayerBoxFix'],
      positionStrategy: this.opts.position || this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

  protected createPortal(): ComponentPortal<TComponent> {
    const injectionTokens = new WeakMap();
    injectionTokens.set(ComponentLayerRef, this);
    const portalInjector = new PortalInjector(this.injector, injectionTokens);
    return new ComponentPortal<TComponent>(this.componentType, this.opts.viewContainerRef, portalInjector);
  }

  protected afterOpened(overlayRef: OverlayRef): void {
    this.layerOpenedSub = this.zone.onStable.asObservable().pipe(take(1)).pipe(switchMap(() => {
      return merge(this.opts.modal ? NEVER : overlayRef.keydownEvents().pipe(filter(event => {
        return event.keyCode === ESCAPE;
      })), this.opts.modal ? NEVER : overlayRef.backdropClick());
    })).subscribe(result => {
      super.detach();
    });
  }

  protected afterClosed(result: any, overlayRef: OverlayRef): void {
    this.layerOpenedSub && this.layerOpenedSub.unsubscribe();
    this._afterClose.next(result);
  }
}
