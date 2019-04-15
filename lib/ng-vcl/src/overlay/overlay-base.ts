import { Subject, merge } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Portal } from '@angular/cdk/portal';
import { Injector, EmbeddedViewRef, ComponentRef } from '@angular/core';

export abstract class OverlayBase<TResult, TInstanceRef extends EmbeddedViewRef<TType> | ComponentRef<TType>, TType> {
  constructor(injector: Injector) {
    this.injector = injector;
  }

  private _detachEmitter: Subject<TResult> = new Subject();
  private _instanceRef?: TInstanceRef;
  private _overlayRef?: OverlayRef;
  private _isDestroyed = false;
  private _portal: Portal<any>;

  protected readonly injector?: Injector;

  protected afterAttached(): void { }
  protected afterDetached(result?: TResult): void { }

  protected get overlayRef() {
    return this._overlayRef;
  }

  protected get instanceRef() {
    return this._instanceRef;
  }

  protected get isDestroyed() {
    return this._isDestroyed;
  }

  protected get isAttached(): boolean {
    return this.overlayRef && this.overlayRef.hasAttached();
  }

  protected abstract _createPortal(): Portal<any>;

  protected attach(config: OverlayConfig) {

    if (!this.overlayRef || !this._portal) {
      const injector = this.injector;
      const overlay = injector.get(Overlay);
      this._overlayRef = overlay.create(config);
      this._isDestroyed = false;
    }

    if (!this._portal) {
      this._portal = this._createPortal();
    }

    if (!this.isAttached) {
      this._instanceRef = this.overlayRef.attach(this._portal);

      merge<TResult>(
        this.overlayRef.detachments().pipe(filter(() => this.isAttached), map(() => ({action: 'detach'}))),
        this._detachEmitter.asObservable(),
      ).pipe(take(1)).subscribe((result) => {
        this.overlayRef.detach();
        this.afterDetached(result);
        this._instanceRef = undefined;
      });
      this.afterAttached();
    } else {
      this.overlayRef.updatePositionStrategy(config.positionStrategy);
    }
  }

  protected detach(result?: TResult) {
    if (!this.isAttached) {
      return;
    }
    this._detachEmitter.next(result);
  }

  public updatePosition() {
    this.overlayRef.updatePosition();
  }

  public destroy() {
    this._isDestroyed = true;
    if (this.overlayRef) {
      this.detach();
      this.overlayRef.dispose();
      this._overlayRef = undefined;
    }
  }

}
