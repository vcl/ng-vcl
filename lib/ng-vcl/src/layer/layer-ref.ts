import { Injector, NgZone, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { take, switchMap, filter } from 'rxjs/operators';
import { merge, NEVER, Subject, Subscription } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { LayerConfig } from './config';
import { LayerBase } from './layer-base';
import { ComponentPortal, TemplatePortal, ComponentType } from '@angular/cdk/portal';

export abstract class LayerRef<TData = any, TResult = any> extends LayerBase<TResult> {

  constructor(protected injector: Injector) {
    super(injector);
    this._zone = injector.get(NgZone);
    this._overlay = injector.get(Overlay);
  }

  private _zone: NgZone;
  private _overlay: Overlay;
  private _layerOpenedSub?: Subscription;
  private _afterClose = new Subject<TResult | undefined>();

  private _currentConfig: LayerConfig;

  afterClose = this._afterClose.asObservable();

  abstract readonly templateOrComponent: TemplateRef<any> | ComponentType<any>;


  get visible() {
    return this.isAttached;
  }

  get data(): TData {
    return this._currentConfig.data;
  }

  toggle() {
    if (this.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  getLayerConfig(): LayerConfig {
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
    return super.detach(result);
  }

  protected afterAttached(): void {
    this._layerOpenedSub = this._zone.onStable.asObservable().pipe(take(1)).pipe(switchMap(() => {
      return merge(
        this._currentConfig.closeOnEscape ? NEVER : this.overlayRef.keydownEvents().pipe(
          filter(event => {
            return event.keyCode === ESCAPE;
          })
        ),
        this._currentConfig.closeOnBackdropClick ? NEVER : this.overlayRef.backdropClick()
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
