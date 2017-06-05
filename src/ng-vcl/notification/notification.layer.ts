import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { LayerService, Layer, LayerRef } from './../layer/index';
import { NotificationComponent } from './notification.component';
import { NotificationOptions, NotificationPosition } from './types';
import { Notification } from './notification';

export abstract class NotificationLayer<T> extends LayerRef {
  abstract reverse: boolean;

  notifications: Notification[] = [];

  add(notification: Notification) {
    notification.subscribe(() => {
      this.remove(notification);
    });

    this.notifications = this.reverse ?  [notification, ...this.notifications] : [...this.notifications, notification];
    this.open({ notifications: this.notifications });

    return notification;
  }

  remove(notification: Notification) {
    this.notifications = this.notifications.filter(g => g !== notification);
    if (this.notifications.length === 0) {
      this.close();
    } else {
      this.open({ notifications: this.notifications });
    }
  }
}

export function noop() {}

@Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationTopRight', offClick: noop })
export class NotificationLayerTopRight extends NotificationLayer<NotificationComponent> { reverse: true; }
@Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationTop', offClick: noop })
export class NotificationLayerTop extends NotificationLayer<NotificationComponent> { reverse: true; }
@Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationTopLeft', offClick: noop })
export class NotificationLayerTopLeft extends NotificationLayer<NotificationComponent> { reverse: true; }
@Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationBottomRight', offClick: noop })
export class NotificationLayerBottomRight extends NotificationLayer<NotificationComponent> { reverse: false; }
@Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationBottom', offClick: noop })
export class NotificationLayerBottom extends NotificationLayer<NotificationComponent> { reverse: false; }
@Layer(NotificationComponent, { transparent: true, customClass: 'vclLayerNotificationBottomLeft', offClick: noop })
export class NotificationLayerBottomLeft extends NotificationLayer<NotificationComponent> { reverse: false; }


