import { Injectable, Injector, Inject, ComponentRef } from '@angular/core';
import { NotifierPosition, NotificationConfig, NOTIFICATION_CONFIG_TOKEN } from './types';
import { NotificationRef, NotificationsManager } from './notification-ref';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { NotificationComponent } from './notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationsManagerService implements NotificationsManager {
  constructor(
    private _overlay: Overlay,
    private _injector: Injector,
    @Inject(NOTIFICATION_CONFIG_TOKEN)
    private _config: NotificationConfig
  ) { }

  private _notifications: ([NotificationRef, OverlayRef, ComponentRef<NotificationComponent>])[] = [];

  add(notificationRef: NotificationRef) {
    const overlayRef = this._overlay.create();
    const portal = this._createPortal(notificationRef);
    const componentRef = overlayRef.attach(portal);

    this._notifications.push([notificationRef, overlayRef, componentRef]);
    this._updatePositions();

    let timeout: number | false;
    if (typeof notificationRef.timeout === 'number' || notificationRef.timeout === false) {
      timeout = notificationRef.timeout;
    } else {
      timeout = this._config.timeout;
    }

    if (timeout !== false) {
      setTimeout(() => {
        this.remove(notificationRef);
      }, timeout);
    }
  }

  remove(notificationRef: NotificationRef): void {
    const [, overlayRef, componentRef] = this._notifications.find(([n]) => n === notificationRef);

    if (overlayRef) {
      componentRef.instance.requestClose(() => {
        overlayRef.dispose();
        this._updatePositions();
      });
    }
    this._notifications = this._notifications.filter(([n]) => n !== notificationRef);
  }

  isVisible(notificationRef: NotificationRef): boolean {
    const overlayRef = this.getOverlayRef(notificationRef);
    return !!overlayRef && !!overlayRef.overlayElement;
  }

  getNotifications(pos?: NotifierPosition): NotificationRef[] {
    return this._notifications.filter(([n]) => n.visible && (pos ? n.position === pos : true)).map(([n]) => n);
  }

  getOverlayRef(notificationRef: NotificationRef) {
    const [, overlayRef] = this._notifications.find(([n]) => n === notificationRef);
    return overlayRef;
  }

  private _updatePositions() {
    this.getNotifications().forEach(n => this.updatePosition(n));
  }

  private _createPortal(notificationRef: NotificationRef) {
    const tokens = new WeakMap();
    tokens.set(NotificationRef, notificationRef);
    const injector = new PortalInjector(this._injector, tokens);
    return new ComponentPortal(NotificationComponent, null, injector);
  }

  updatePosition(notificationRef: NotificationRef) {
    const overlayRef = this.getOverlayRef(notificationRef);

    const notifications = this.getNotifications(notificationRef.position);
    const idx = notifications.indexOf(notificationRef);
    const queue = notifications.splice(0, idx);

    const nOffset = queue.reduce((height, _notificationRef) => {
      const _overlayRef = this.getOverlayRef(_notificationRef);
      return height + _overlayRef.overlayElement.getBoundingClientRect().height;
    }, 0);

    const offset = (Math.floor(nOffset) || this._config.offset) + 'px';

    let posStrategy;
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

    overlayRef.updatePositionStrategy(posStrategy);
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
