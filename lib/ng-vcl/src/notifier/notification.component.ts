import { Component, HostBinding, HostListener, Inject } from '@angular/core';
import { AnimationEvent, useAnimation } from '@angular/animations';
import { NotificationRef } from './notification-ref';
import { NgClass } from '@angular/common';
import { TYPE_CLASS_MAP, NOTIFICATION_CONFIG_TOKEN, NotificationConfig } from './types';
import { trigger, transition, } from '@angular/animations';
import { stateVoidOpenAnimation, stateOpenClosingAnimation } from './notification.animations';
import { NOTIFICATION_ANIMATION_PARAMS_TOKEN, NotificationAnimationParams } from './types';
import { OverlayRef } from '@angular/cdk/overlay';

export type NotificationAnimationState = 'open' | 'closing' | 'closed';

@Component({
  selector: 'vcl-notification',
  templateUrl: './notification.component.html',
  providers: [ NgClass ],
  animations: [
    trigger('stateAnimation', [
      transition('void => open', useAnimation(stateVoidOpenAnimation)),
      transition('open => closing', useAnimation(stateOpenClosingAnimation))
    ])
  ],
})
export class NotificationComponent {

  constructor(
    public notificationRef: NotificationRef,
    private overlayRef: OverlayRef,
    ngClass: NgClass,
    @Inject(NOTIFICATION_ANIMATION_PARAMS_TOKEN)
    private _animationParams: NotificationAnimationParams,
    @Inject(NOTIFICATION_CONFIG_TOKEN)
    private _config: NotificationConfig,
  ) {
    const type = TYPE_CLASS_MAP[notificationRef.type];
    ngClass.ngClass = type.notifier;
    ngClass.ngDoCheck();
    this.icon = notificationRef.icon || type.icon;

    let timeout: number | false;
    if (typeof notificationRef.timeout === 'number' || notificationRef.timeout === false) {
      timeout = notificationRef.timeout;
    } else {
      timeout = this._config.timeout;
    }

    if (timeout !== false) {
      setTimeout(() => {
        this.state = 'closing';
      }, timeout);
    }

  }

  @HostBinding('class.vclNotification')
  classVclNotification = true;

  @HostBinding('class.vclLayoutHorizontal')
  classVclLayoutHorizontal = true;

  @HostBinding('class.vclLayoutCenter')
  classVclLayoutCenter = true;

  state: NotificationAnimationState = 'open';
  icon: string;

  close() {
    this.state = 'closing';
  }

  @HostBinding('@stateAnimation')
  get fadeAnimation() {
    return {
      value: this.state,
      params: this._animationParams
    };
  }

  @HostListener('@stateAnimation.done', ['$event'])
  onFadeFinished(event: AnimationEvent) {
    const isClosingOut = (event.toState as NotificationAnimationState) === 'closing';
    const itFinished = this.state === 'closing';

    if (isClosingOut && itFinished) {
      this.state = 'closed';
      this.notificationRef.destroy();
    }
  }
}
