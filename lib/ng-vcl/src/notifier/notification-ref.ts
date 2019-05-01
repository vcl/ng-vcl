import { NotifierOptions, NotifierType, NotifierPosition } from './types';

export interface NotificationRefHandler {
  close(notificationRef: NotificationRef): void;
  destroy(notificationRef: NotificationRef): void;
  isDestroyed(notificationRef: NotificationRef): boolean;
}

export class NotificationRef {

  constructor(
    private _handler: NotificationRefHandler,
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
    this._handler.close(this);
  }

  destroy() {
    this._handler.destroy(this);
  }

  get isDestroyed() {
    return this._handler.isDestroyed(this);
  }
}
