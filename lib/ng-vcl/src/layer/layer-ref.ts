import { Injector, NgZone, Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { take, switchMap, filter } from 'rxjs/operators';
import { merge, NEVER, Subject, Subscription } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { LayerOptions } from './interfaces';
import { LayerBase } from './layer-base';
import { ComponentPortal, TemplatePortal, ComponentType } from '@angular/cdk/portal';

export abstract class LayerRef<TData = any, TResult = any> extends LayerBase<TResult> {

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

  private _defaultOpts: LayerOptions;
  private _currentOpts: LayerOptions;

  afterClose = this._afterClose.asObservable();

  abstract readonly templateOrComponent: TemplateRef<any> | ComponentType<any>;

  get visible() {
    return this.isAttached;
  }

  get data(): TData {
    return this._currentOpts.data;
  }

  toggle() {
    if (this.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  open(opts: LayerOptions<TData> = {}) {
    // Merge defaults
    this._currentOpts = { ...this._defaultOpts, ...opts};

    const config = new OverlayConfig({
      scrollStrategy: this._overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'vclLayerCover',
      panelClass: ['vclLayerBox'],
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

  public destroy() {
    super.destroy();
    this._afterClose.complete();
  }


  createPortal() {
    const viewContainerRef = this.injector.get(ViewContainerRef, null);
    if (this.templateOrComponent instanceof TemplateRef) {
      return new TemplatePortal(this.templateOrComponent, viewContainerRef);
    }
    const injector = this.createInjector();
    return new ComponentPortal(this.templateOrComponent, viewContainerRef, injector);
  }

  createInjector() {
    return Injector.create([{
      provide: LayerRef,
      useValue: this
    } , {
      provide: this.constructor,
      useValue: this
    }], this.injector);
  }
}
