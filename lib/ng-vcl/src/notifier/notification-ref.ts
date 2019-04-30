import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { NotifierOptions, NotifierType, NotifierPosition } from './types';
import { Subject } from 'rxjs';

export interface NotificationsManager {
  add(notificationRef: NotificationRef): void;
  remove(notificationRef: NotificationRef): void;
  isVisible(notificationRef: NotificationRef): boolean;
}

export class NotificationRef {

  constructor(
    private _notificationsManager: NotificationsManager,
    opts: NotifierOptions
  ) {
    Object.assign(this, opts);
  }

  readonly text =  '';
  readonly icon =  '';
  readonly html = false;
  readonly type: NotifierType = NotifierType.None;
  readonly showCloseButton = true;
  readonly position: NotifierPosition = NotifierPosition.TopRight;
  readonly timeout: number | boolean = true;

  close() {
    this._notificationsManager.remove(this);
  }

  get visible() {
    return this._notificationsManager.isVisible(this);
  }


}
