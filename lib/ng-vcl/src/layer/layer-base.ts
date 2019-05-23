import { Subject, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Portal } from '@angular/cdk/portal';
import { Injector } from '@angular/core';

export abstract class LayerBase<TResult = any, TInstanceRef = any> {
  constructor(injector: Injector) {
    this.injector = injector;
  }

  private _requestDetachEmitter: Subject<TResult> = new Subject();
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

  protected abstract createPortal(): Portal<any>;

  protected attach(config: OverlayConfig) {
    if (this.isDestroyed) {
      throw new Error('Cannot attach destroyed layer');
    }

    if (!this.overlayRef || !this._portal) {
      const injector = this.injector;
      const overlay = injector.get(Overlay);
      this._overlayRef = overlay.create(config);
    }

    if (!this._portal) {
      this._portal = this.createPortal();
    }

    if (!this.isAttached) {
      this._instanceRef = this.overlayRef.attach(this._portal);

      merge<TResult>(
        // Called when detached via detach() method
        this._requestDetachEmitter.asObservable(),
        // Called when detached from anywhere else
        this.overlayRef.detachments().pipe(map(() => undefined)),
      ).pipe(
        take(1) // Take 1 to make sure cleanup is only done once
      ).subscribe((result) => {
        // The overlay is not detached after an event from the request emitter
        if (this.overlayRef && this.overlayRef.hasAttached()) {
          this.overlayRef.detach();
        }
        this._instanceRef = undefined;
        this._overlayRef = undefined;
        this.afterDetached(result);
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
    this._requestDetachEmitter.next(result);
  }

  public updatePosition() {
    this.overlayRef.updatePosition();
  }

  public destroy() {
    this._isDestroyed = true;
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.detach();
    }
  }
}
