import { Injectable, Injector, Inject, ComponentRef } from '@angular/core';
import { NotifierPosition, NotifierConfig, NOTIFIER_CONFIG_TOKEN } from './types';
import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { NotifierComponent } from './notifier.component';
import { NotifierOptions } from './types';
import { take } from 'rxjs/operators';
import { NotifierOverlayRef, NotifierOverlayRefHandler } from './notifier-overlay-ref';

interface Notification {
  notificationRef: NotifierOverlayRef;
  overlayRef: OverlayRef;
  componentRef: ComponentRef<NotifierComponent>;
}

@Injectable({
  providedIn: 'root'
})
export class NotifierHandlerService implements NotifierOverlayRefHandler {
  constructor(
    private _overlay: Overlay,
    private _injector: Injector,
    @Inject(NOTIFIER_CONFIG_TOKEN)
    private _config: NotifierConfig,
  ) { }

  private _notifications: Notification[] = [];

  create(opts: NotifierOptions): NotifierOverlayRef {
    const notificationRef = new NotifierOverlayRef(this, opts);
    const overlayRef = this._overlay.create({
      hasBackdrop: opts.hasBackdrop,
      disposeOnNavigation: true,
    });
    const portal = this._createPortal(notificationRef, overlayRef);
    const componentRef = overlayRef.attach(portal);

    if (opts.hasBackdrop && (opts.closeOnBackdrop ?? true)) {
      overlayRef.backdropClick().pipe(
        take(1),
      ).subscribe(() => {
        overlayRef.detach();
      });
    }

    this._notifications.push({ notificationRef, overlayRef, componentRef });
    this.updatePosition(notificationRef);
    return notificationRef;
  }

  close(notificationRef: NotifierOverlayRef): void {
    const notification = this._notifications.find((n) => n.notificationRef === notificationRef);
    if (notification) {
      notification.componentRef.instance.onCloseClick();
    }
  }

  destroy(notificationRef: NotifierOverlayRef): void {
    const notification = this._notifications.find((n) => n.notificationRef === notificationRef);
    if (notification) {
      notification.overlayRef.dispose();
    }
    this._notifications = this._notifications.filter((n) => n.notificationRef !== notificationRef);
  }

  isDestroyed(notificationRef: NotifierOverlayRef): boolean {
    return !!this.getOverlayRef(notificationRef);
  }

  isVisible(notificationRef: NotifierOverlayRef): boolean {
    const overlayRef = this.getOverlayRef(notificationRef);
    return !!overlayRef && !!overlayRef.overlayElement;
  }

  getNotifications(pos?: NotifierPosition): NotifierOverlayRef[] {
    return this._notifications.filter((n) => (pos ? n.notificationRef.position === pos : true)).map((n) => n.notificationRef);
  }

  getOverlayRef(notificationRef: NotifierOverlayRef) {
    const notification = this._notifications.find((n) => n.notificationRef === notificationRef);
    return notification && notification.overlayRef;
  }

  private _createPortal(notificationRef: NotifierOverlayRef, overlayRef: OverlayRef) {
    const tokens = new WeakMap();
    tokens.set(NotifierOverlayRef, notificationRef);
    tokens.set(OverlayRef, overlayRef);
    const injector = new PortalInjector(this._injector, tokens);
    return new ComponentPortal(NotifierComponent, null, injector);
  }

  updatePosition(notificationRef: NotifierOverlayRef) {
    const notification = this._notifications.find((n) => n.notificationRef === notificationRef);
    if (!notification) {
      return;
    }
    let posStrategy: PositionStrategy | undefined;

    if (typeof notificationRef.position === 'object') {
      posStrategy = notificationRef.position;
    } else {
      const notifications = this.getNotifications(notificationRef.position);
      const idx = notifications.indexOf(notificationRef);
      const queue = notifications.splice(0, idx);
  
      const nOffset = queue.reduce((height, _notificationRef) => {
        const _overlayRef = this.getOverlayRef(_notificationRef);
        return height + _overlayRef.overlayElement.getBoundingClientRect().height;
      }, 0);
      const offset = (Math.floor(nOffset) || this._config.offset) + 'px';
      switch (notificationRef.position) {
        case NotifierPosition.TopRight: {
          posStrategy = this.posStrategyTopRight(offset);
          break;
        }
        case NotifierPosition.BottomRight: {
          posStrategy = this.posStrategyBottomRight(offset);
          break;
        }
        case NotifierPosition.Bottom: {
          posStrategy = this.posStrategyBottom(offset);
          break;
        }
        case NotifierPosition.BottomLeft: {
          posStrategy = this.posStrategyBottomLeft(offset);
          break;
        }
        case NotifierPosition.TopLeft: {
          posStrategy = this.posStrategyTopLeft(offset);
          break;
        }
        case NotifierPosition.Top: {
          posStrategy = this.posStrategyTop(offset);
          break;
        }
        case NotifierPosition.Center: {
          posStrategy = this.posStrategyCenter();
          break;
        }
      }
    }

    if (posStrategy) {
      notification.overlayRef.updatePositionStrategy(posStrategy);
    }
  }

  private posStrategyTopRight(offset: string) {
    return this._overlay.position().global().top(offset).right('1em');
  }
  private posStrategyTopLeft(offset: string) {
    return this._overlay.position().global().top(offset).left('1em');
  }
  private posStrategyTop(offset: string) {
    return this._overlay.position().global().top(offset).centerHorizontally();
  }
  private posStrategyBottomRight(offset: string) {
    return this._overlay.position().global().bottom(offset).right('1em');
  }
  private posStrategyBottomLeft(offset: string) {
    return this._overlay.position().global().bottom(offset).left('1em');
  }
  private posStrategyBottom(offset: string) {
    return this._overlay.position().global().bottom(offset).centerHorizontally();
  }
  private posStrategyCenter() {
    return this._overlay.position().global().centerVertically().centerHorizontally();
  }


}
