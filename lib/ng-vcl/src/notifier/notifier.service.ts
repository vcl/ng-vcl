import { Injectable } from '@angular/core';
import { NotifierOptions, NotifierType } from './types';
import { NotificationRef } from './notification-ref';
import { NotificationsManagerService } from './notifications-manager.service';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(private _notificationsManagerService: NotificationsManagerService) { }

  info(opts: NotifierOptions) {
    return this.queue({
      type: NotifierType.Info,
      ...opts
    });
  }

  success(opts: NotifierOptions) {
    return this.queue({
      type: NotifierType.Success,
      ...opts
    });
  }

  warning(opts: NotifierOptions) {
    return this.queue({
      type: NotifierType.Warning,
      ...opts
    });
  }

  error(opts: NotifierOptions) {
    return this.queue({
      type: NotifierType.Error,
      ...opts
    });
  }

  queue(opts: NotifierOptions) {
    const notificationRef = new NotificationRef(this._notificationsManagerService, opts);
    this._notificationsManagerService.add(notificationRef);
    return notificationRef;
  }
}

