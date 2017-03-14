import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, ComponentRef } from '@angular/core';

import { NotificationOptions, NotificationType, NotificationPosition, NOTIFICATION_DEFAULTS } from './types';
import { Notification } from './notification';
import { NotificationLayerTopRight, NotificationLayerBottomRight, NotificationLayerBottom, NotificationLayerBottomLeft, NotificationLayerTopLeft, NotificationLayerTop } from './notification.layer';

@Injectable()
export class NotificationService {

  constructor(
    private notificationLayerTopRightRef: NotificationLayerTopRight,
    private notificationLayerBottomRightRef: NotificationLayerBottomRight,
    private notificationLayerBottomRef: NotificationLayerBottom,
    private notificationLayerBottomLeftRef: NotificationLayerBottomLeft,
    private notificationLayerTopLeftRef: NotificationLayerTopLeft,
    private notificationLayerTopRef: NotificationLayerTop,
  ) { }

  show(text: string, opts: NotificationOptions = {}) {
    return this.queue({ text }, opts);
  }

  info(text: string, opts: NotificationOptions = {}) {
    return this.queue({ text, type: NotificationType.Info }, opts);
  }

  success(text: string, opts: NotificationOptions = {}) {
    return this.queue({ text, type: NotificationType.Success }, opts);
  }

  warning(text: string, opts: NotificationOptions = {}) {
    return this.queue({ text, type: NotificationType.Warning }, opts);
  }

  error(text: string, opts: NotificationOptions = {}) {
    return this.queue({ text, type: NotificationType.Error }, opts);
  }

  private queue(...opts: NotificationOptions[]) {
    const notificationOpts: NotificationOptions = Object.assign({}, NOTIFICATION_DEFAULTS, ...opts);
    const notification = new Notification(notificationOpts);

    if (notificationOpts.position === NotificationPosition.TopRight) {
      this.notificationLayerTopRightRef.add(notification);
    } else if (notificationOpts.position === NotificationPosition.BottomRight) {
      this.notificationLayerBottomRightRef.add(notification);
    } else if (notificationOpts.position === NotificationPosition.Bottom) {
      this.notificationLayerBottomRef.add(notification);
    } else if (notificationOpts.position === NotificationPosition.BottomLeft) {
      this.notificationLayerBottomLeftRef.add(notification);
    } else if (notificationOpts.position === NotificationPosition.TopLeft) {
      this.notificationLayerTopLeftRef.add(notification);
    } else if (notificationOpts.position === NotificationPosition.Top) {
      this.notificationLayerTopRef.add(notification);
    } else {
      this.notificationLayerTopRightRef.add(notification);
    }
    return notification;
  }
}
