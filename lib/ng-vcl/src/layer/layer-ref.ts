import { Subscription, Subject, merge, of, Observable, fromEvent } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Portal } from '@angular/cdk/portal';
import { Injector } from '@angular/core';

export abstract class LayerRef<TResult, C = any> {

  private _closingSub?: Subscription;
  private _closeEmitter: Subject<TResult | undefined> = new Subject();

  protected isLayerDestroyed = false;
  protected overlayRef?: OverlayRef;
  protected portal?: Portal<C>;
  protected attachmentRef?: any;

  protected abstract getInjector(): Injector;
  protected abstract getOverlayConfig(): OverlayConfig;
  protected abstract createPortal(): Portal<C>;
  protected abstract afterOpened(overlayRef: OverlayRef): void;
  protected abstract afterClosed(result: TResult, overlayRef: OverlayRef): void;

  protected get isAttached(): boolean {
    return this.overlayRef && this.overlayRef.hasAttached();
  }

  protected attach() {
    if (!this.overlayRef) {

      const injector = this.getInjector();
      const overlay = injector.get(Overlay);

      this.overlayRef = overlay.create(this.getOverlayConfig());
      this.portal = this.createPortal();
      this.isLayerDestroyed = false;
    }
    this._attach();
  }

  protected detach(result?: TResult) {
    if (!this.isAttached) {
      return;
    }
    this._closeEmitter.next(result);
  }

  public updatePosition() {
    this.overlayRef.updatePosition();
  }

  private _attach() {
    if (!this.isAttached) {
      this.attachmentRef = this.overlayRef.attach(this.portal);

      this._closingSub = merge<TResult | undefined>(
        this.overlayRef ? this.overlayRef.detachments().pipe(filter(() => this.isAttached), map(() => undefined)) : of(undefined),
        this._closeEmitter.asObservable(),
      ).pipe(take(1)).subscribe((result) => {
        this._detach(result);
      });
      this.afterOpened(this.overlayRef);
    }
  }

  private _detach(result?: TResult): void {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      this._closingSub.unsubscribe();
      this.afterClosed(result, this.overlayRef);
    }
  }


  public destroy() {
    this.isLayerDestroyed = true;
    if (this.overlayRef) {
      this._detach();
      this._closeEmitter.complete();
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
