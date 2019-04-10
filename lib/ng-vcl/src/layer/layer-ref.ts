import { Subscription, Subject, merge, of, Observable, fromEvent } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Portal } from '@angular/cdk/portal';
import { Injector } from '@angular/core';

export abstract class LayerRef<TResult, C = any> {

  private _detachEmitter: Subject<TResult | undefined> = new Subject();

  protected isLayerDestroyed = false;
  protected overlayRef?: OverlayRef;
  protected portal?: Portal<C>;
  protected attachmentRef?: any;

  protected abstract getInjector(): Injector;
  protected abstract createPortal(): Portal<C>;
  protected abstract afterAttached(overlayRef: OverlayRef): void;
  protected abstract afterDetached(result: TResult, overlayRef: OverlayRef): void;

  protected get isAttached(): boolean {
    return this.overlayRef && this.overlayRef.hasAttached();
  }

  protected attach(config: OverlayConfig) {
    if (!this.overlayRef) {
      const injector = this.getInjector();
      const overlay = injector.get(Overlay);

      this.overlayRef = overlay.create(config);
      this.portal = this.createPortal();
      this.isLayerDestroyed = false;
    }
    if (!this.isAttached) {
      this.attachmentRef = this.overlayRef.attach(this.portal);

      merge<TResult | undefined>(
        this.overlayRef ? this.overlayRef.detachments().pipe(filter(() => this.isAttached), map(() => undefined)) : of(undefined),
        this._detachEmitter.asObservable(),
      ).pipe(take(1)).subscribe((result) => {
        this.overlayRef.detach();
        // this._closingSub.unsubscribe();
        this.afterDetached(result, this.overlayRef);
      });
      this.afterAttached(this.overlayRef);
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
    this.isLayerDestroyed = true;
    if (this.overlayRef) {
      this.detach();
      this.overlayRef.dispose();
      this.overlayRef = undefined;
      this.attachmentRef = undefined;
    }
  }

  protected createLayerOffClickStream(document: any, exclude: Element[]): Observable<MouseEvent | TouchEvent> {
    if (!document) {
      return of(undefined);
    }

    return merge(
      fromEvent(document, 'click') as Observable<MouseEvent>,
      fromEvent(document, 'touchend') as Observable<TouchEvent>
    )
    .pipe(filter(event => {
      const clickTarget = event.target as HTMLElement;
      const isOffClick = this.isAttached &&
              exclude.every(element => clickTarget !== element ) &&
              (!!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget));
      return isOffClick;
    }), map(() => undefined));
  }
}
