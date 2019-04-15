import { Injector, NgZone, InjectionToken } from '@angular/core';
import { PortalInjector } from '@angular/cdk/portal';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { take, switchMap, filter } from 'rxjs/operators';
import { merge, NEVER, Subject, Subscription } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { ComponentOverlay } from '../overlay';
import { Layer, LayerOptions } from './interfaces';

export const LAYER_TOKEN = new InjectionToken('vcl-layer');

export abstract class LayerBase<TData = any, TResult = any, TComponent = any> extends ComponentOverlay<TResult, TComponent> implements Layer<TData, TResult> {

  constructor(
    protected injector: Injector,
    opts: LayerOptions = {}
  ) {
    super(injector);
    this._zone = injector.get(NgZone);
    this._overlay = injector.get(Overlay);
    this._defaultOpts = opts;
  }

  private _zone: NgZone;
  private _overlay: Overlay;
  private _layerOpenedSub?: Subscription;
  private _afterClose = new Subject<TResult | undefined>();

  afterClose = this._afterClose.asObservable();

  private _data: TData;
  private _defaultOpts: LayerOptions;
  private _currentOpts: LayerOptions;

  get visible() {
    return this.isAttached;
  }

  get data() {
    return this._data;
  }

  open(data?: TData, opts: LayerOptions = {}) {
    if (this.isAttached) {
      this.close();
    }

    // Merge defaults
    this._currentOpts = { ...this._defaultOpts, ...opts};

    this._data = data;

    const config = new OverlayConfig({
      scrollStrategy: this._overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'vclLayerCover',
      panelClass: ['vclLayerBox', 'vclLayerBoxFix'],
      positionStrategy: opts.position || this._currentOpts.position || this._overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    this.attach(config);

    return this.afterClose.pipe(take(1));
  }

  close(result?: TResult) {
    return super.detach(result);
  }

  protected getInjector(): Injector {
    return this.injector;
  }

  protected createInjector() {
    const injectionTokens = new WeakMap();
    injectionTokens.set(LAYER_TOKEN, this);
    return new PortalInjector(this.injector, injectionTokens);
  }

  protected afterAttached(): void {
    this._layerOpenedSub = this._zone.onStable.asObservable().pipe(take(1)).pipe(switchMap(() => {
      return merge(
        this._currentOpts.modal ? NEVER : this.overlayRef.keydownEvents().pipe(
          filter(event => {
            return event.keyCode === ESCAPE;
          })
        ),
        this._currentOpts.modal ? NEVER : this.overlayRef.backdropClick()
      );
    })).subscribe(() => {
      super.detach();
    });
  }

  protected afterDetached(result?: TResult): void {
    this._layerOpenedSub && this._layerOpenedSub.unsubscribe();
    this._afterClose.next(result);
  }
}
