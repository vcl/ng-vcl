import { Injectable, Injector, Inject, ComponentRef } from '@angular/core';
import { NotifierPosition, NotificationConfig, NOTIFICATION_CONFIG_TOKEN } from './types';
import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { NotificationComponent } from './notification.component';
import { NotificationRef, NotificationRefHandler } from './notification-ref';
import { NotifierOptions } from './types';

interface Notification {
  notificationRef: NotificationRef;
  overlayRef: OverlayRef;
  componentRef: ComponentRef<NotificationComponent>;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsHandlerService implements NotificationRefHandler {
  constructor(
    private _overlay: Overlay,
    private _injector: Injector,
    @Inject(NOTIFICATION_CONFIG_TOKEN)
    private _config: NotificationConfig,
  ) { }

  private _notifications: Notification[] = [];

  create(opts: NotifierOptions): NotificationRef {
    const notificationRef = new NotificationRef(this, opts);
    const overlayRef = this._overlay.create();
    const portal = this._createPortal(notificationRef, overlayRef);
    const componentRef = overlayRef.attach(portal);
    this._notifications.push({ notificationRef, overlayRef, componentRef });
    this.updatePosition(notificationRef);
    return notificationRef;
  }

  close(notificationRef: NotificationRef): void {
    const notification = this._notifications.find((n) => n.notificationRef === notificationRef);
    if (notification) {
      notification.componentRef.instance.close();
    }
  }

  destroy(notificationRef: NotificationRef): void {
    const notification = this._notifications.find((n) => n.notificationRef === notificationRef);
    if (notification) {
      notification.overlayRef.dispose();
    }
    this._notifications = this._notifications.filter((n) => n.notificationRef !== notificationRef);
  }

  isDestroyed(notificationRef: NotificationRef): boolean {
    return !!this.getOverlayRef(notificationRef);
  }

  isVisible(notificationRef: NotificationRef): boolean {
    const overlayRef = this.getOverlayRef(notificationRef);
    return !!overlayRef && !!overlayRef.overlayElement;
  }

  getNotifications(pos?: NotifierPosition): NotificationRef[] {
    return this._notifications.filter((n) => (pos ? n.notificationRef.position === pos : true)).map((n) => n.notificationRef);
  }

  getOverlayRef(notificationRef: NotificationRef) {
    const notification = this._notifications.find((n) => n.notificationRef === notificationRef);
    return notification && notification.overlayRef;
  }

  private _createPortal(notificationRef: NotificationRef, overlayRef: OverlayRef) {
    const tokens = new WeakMap();
    tokens.set(NotificationRef, notificationRef);
    tokens.set(OverlayRef, overlayRef);
    const injector = new PortalInjector(this._injector, tokens);
    return new ComponentPortal(NotificationComponent, null, injector);
  }

  updatePosition(notificationRef: NotificationRef) {
    const notification = this._notifications.find((n) => n.notificationRef === notificationRef);
    if (!notification) {
      return;
    }

    const notifications = this.getNotifications(notificationRef.position);
    const idx = notifications.indexOf(notificationRef);
    const queue = notifications.splice(0, idx);

    const nOffset = queue.reduce((height, _notificationRef) => {
      const _overlayRef = this.getOverlayRef(_notificationRef);
      return height + _overlayRef.overlayElement.getBoundingClientRect().height;
    }, 0);

    const offset = (Math.floor(nOffset) || this._config.offset) + 'px';

    let posStrategy: PositionStrategy;
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
    }
    notification.overlayRef.updatePositionStrategy(posStrategy);
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


}
