import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, ComponentRef } from '@angular/core';

import { NotificationOptions, NotificationType, NotificationPosition, NOTIFICATION_DEFAULTS, POSITION_MAP } from './types';
import { Notification } from './notification';
import { LayerService, LayerRef } from '../layer/index';
import { NotificationComponent } from './notification.component';

export class NotificationLayerRef extends LayerRef {
  notifications: Notification[];
}

@Injectable()
export class NotificationService {

  constructor(private ls: LayerService) { }

  layers = new Map<NotificationPosition, NotificationLayerRef>();

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

    const pos = notificationOpts.position || NotificationPosition.TopRight;
    const reverse = POSITION_MAP[pos].reverse;

    if (!this.layers.has(pos)) {
      const layerRef = this.ls.create(NotificationComponent, {
        transparent: true,
        customClass: POSITION_MAP[pos].class
      }) as NotificationLayerRef;
      layerRef.notifications = [];
      this.layers.set(pos, layerRef);
    }

    const layer = this.layers.get(pos);

    if (layer) {
      notification.subscribe(() => {
        layer.notifications = layer.notifications.filter(g => g !== notification);
        if (layer.notifications.length === 0) {
          layer.close();
        } else {
          layer.open({ notifications: layer.notifications });
        }
      });
      layer.notifications = reverse ?  [notification, ...layer.notifications] : [...layer.notifications, notification];
      layer.open({ notifications: layer.notifications });
    }
  }
}
