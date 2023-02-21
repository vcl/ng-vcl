import { Injectable } from '@angular/core';
import { NotifierOptions } from './types';
import { NotifierHandlerService } from './notifier-handler.service';
import { NotificationType } from '../notification/index';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private _notificationsHandler: NotifierHandlerService) {}

  info(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { content: opts } : opts;
    return this.queue({
      type: NotificationType.Info,
      ...opts,
    });
  }

  success(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { content: opts } : opts;
    return this.queue({
      type: NotificationType.Success,
      ...opts,
    });
  }

  warning(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { content: opts } : opts;
    return this.queue({
      type: NotificationType.Warning,
      ...opts,
    });
  }

  error(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { content: opts } : opts;
    return this.queue({
      type: NotificationType.Error,
      ...opts,
    });
  }

  queue(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { content: opts } : opts;
    return this._notificationsHandler.create(opts);
  }
}
