import { PositionStrategy } from '@angular/cdk/overlay';
import { NotifierOptions, NotifierPosition } from './types';
import { Portal } from '@angular/cdk/portal';
import { NotificationType } from '../notification/index';

export interface NotifierOverlayRefHandler {
  close(notificationRef: NotifierOverlayRef): void;
  destroy(notificationRef: NotifierOverlayRef): void;
  isDestroyed(notificationRef: NotifierOverlayRef): boolean;
}

export class NotifierOverlayRef {

  constructor(
    private _handler: NotifierOverlayRefHandler,
    opts: NotifierOptions
  ) {
    Object.assign(this, opts);
  }

  readonly title: string;
  readonly content: string | Portal<any>;
  readonly footer?: string;
  readonly icon?: string;
  readonly type: NotificationType = NotificationType.None;
  readonly showCloseButton = false;
  readonly position: NotifierPosition | PositionStrategy = NotifierPosition.TopRight;
  readonly timeout: number | boolean = true;
  readonly class: string | undefined = undefined;


  get contentIsString() {
    return typeof this.content === 'string';
  }

  get contentIsPortal() {
    return this.content instanceof Portal;
  }

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
