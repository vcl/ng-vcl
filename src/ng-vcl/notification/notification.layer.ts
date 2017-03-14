import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { LayerService, Layer, LayerRef } from './../layer/index';
import { NotificationComponent } from './notification.component';
import { NotificationOptions, NotificationPosition } from './types';
import { Notification } from './notification';

export abstract class NotificationLayer<T> extends LayerRef {
  transparent = true;
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
      // this.open({ notifications: this.notifications });
    } else {
      this.open({ notifications: this.notifications });
    }
  }

  offClick() {

  }
}

@Layer(NotificationComponent)
export class NotificationLayerTopRight extends NotificationLayer<NotificationComponent> {
  customClass = 'vclLayerNotificationTopRight';
  reverse = true;
};
@Layer(NotificationComponent)
export class NotificationLayerTop extends NotificationLayer<NotificationComponent> {
  customClass: 'vclLayerNotificationTop';
  reverse = true;
};
@Layer(NotificationComponent)
export class NotificationLayerTopLeft extends NotificationLayer<NotificationComponent> {
  customClass = 'vclLayerNotificationTopLeft';
  reverse = true;
};
@Layer(NotificationComponent)
export class NotificationLayerBottomRight extends NotificationLayer<NotificationComponent> {
  customClass = 'vclLayerNotificationBottomRight';
  reverse = false;
};
@Layer(NotificationComponent)
export class NotificationLayerBottom extends NotificationLayer<NotificationComponent> {
  customClass = 'vclLayerNotificationBottom';
  reverse = false;
};
@Layer(NotificationComponent)
export class NotificationLayerBottomLeft extends NotificationLayer<NotificationComponent> {
  customClass = 'vclLayerNotificationBottomLeft';
  reverse = false;
};
