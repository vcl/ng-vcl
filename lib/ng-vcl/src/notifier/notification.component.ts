import { Component, HostBinding, HostListener, Inject } from '@angular/core';
import { AnimationEvent, useAnimation } from '@angular/animations';
import { NotificationRef } from './notification-ref';
import { NgClass } from '@angular/common';
import { TYPE_CLASS_MAP } from './types';
import { trigger, transition, } from '@angular/animations';
import { stateVoidOpenAnimation, stateOpenClosingAnimation } from './notification.animations';
import { NOTIFICATION_ANIMATION_PARAMS_TOKEN, NotificationAnimationParams } from './types';

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
    public  notificationRef: NotificationRef,
    ngClass: NgClass,
    @Inject(NOTIFICATION_ANIMATION_PARAMS_TOKEN)
    private animationParams: NotificationAnimationParams
  ) {
    const type = TYPE_CLASS_MAP[notificationRef.type];
    ngClass.ngClass = type.notifier;
    ngClass.ngDoCheck();
    this.icon = notificationRef.icon || type.icon;
  }

  @HostBinding('class.vclNotification')
  classVclNotification = true;

  @HostBinding('class.vclLayoutHorizontal')
  classVclLayoutHorizontal = true;

  @HostBinding('class.vclLayoutCenter')
  classVclLayoutCenter = true;

  state: NotificationAnimationState = 'open';
  icon: string;

  private closeCb?;

  requestClose(cb) {
    this.state = 'closing';
    this.closeCb = cb;
  }

  @HostBinding('@stateAnimation')
  get fadeAnimation() {
    return {
      value: this.state,
      params: this.animationParams
    };
  }

  @HostListener('@stateAnimation.done', ['$event'])
  onFadeFinished(event: AnimationEvent) {
    const isClosingOut = (event.toState as NotificationAnimationState) === 'closing';
    const itFinished = this.state === 'closing';

    if (isClosingOut && itFinished) {
      this.state = 'closed';
      this.closeCb && this.closeCb();
    }
  }
}
