import { Injectable } from '@angular/core';
import { NotifierOptions, NotifierType } from './types';
import { NotificationsHandlerService } from './notifications-handler.service';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(private _notificationsHandler: NotificationsHandlerService) { }

  info(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { text: opts } : opts;
    return this.queue({
      type: NotifierType.Info,
      ...opts
    });
  }

  success(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { text: opts } : opts;
    return this.queue({
      type: NotifierType.Success,
      ...opts
    });
  }

  warning(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { text: opts } : opts;
    return this.queue({
      type: NotifierType.Warning,
      ...opts
    });
  }

  error(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { text: opts } : opts;
    return this.queue({
      type: NotifierType.Error,
      ...opts
    });
  }

  queue(opts: NotifierOptions | string) {
    opts = typeof opts === 'string' ? { text: opts } : opts;
    return this._notificationsHandler.create(opts);
  }
}