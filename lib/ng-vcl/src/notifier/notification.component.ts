import { Component, HostBinding, HostListener, Inject, ChangeDetectionStrategy, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { AnimationEvent, useAnimation } from '@angular/animations';
import { trigger, transition, } from '@angular/animations';
import { TYPE_CLASS_MAP, NOTIFICATION_CONFIG_TOKEN, NotificationConfig } from './types';
import { NotificationRef } from './notification-ref';
import { stateVoidOpenAnimation, stateOpenClosingAnimation } from './notification.animations';
import { NOTIFICATION_ANIMATION_PARAMS_TOKEN, NotificationAnimationParams } from './types';

export type NotificationAnimationState = 'open' | 'closing' | 'closed';

@Component({
  selector: 'vcl-notification',
  templateUrl: './notification.component.html',
  animations: [
    trigger('stateAnimation', [
      transition('void => open', useAnimation(stateVoidOpenAnimation)),
      transition('open => closing', useAnimation(stateOpenClosingAnimation))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements AfterViewInit {

  constructor(
    public notificationRef: NotificationRef,
    private elementRef: ElementRef,
    @Inject(NOTIFICATION_ANIMATION_PARAMS_TOKEN)
    private _animationParams: NotificationAnimationParams,
    @Inject(NOTIFICATION_CONFIG_TOKEN)
    private _config: NotificationConfig,
    private renderer: Renderer2
  ) {
    const type = TYPE_CLASS_MAP[this.notificationRef.type];
    this.icon = notificationRef.icon || type.icon;
    this.notifierClasses = [type.notifier];

    let timeout: number | false;
    if (typeof notificationRef.timeout === 'number' || notificationRef.timeout === false) {
      timeout = notificationRef.timeout;
    } else {
      timeout = this._config.timeout;
    }

    if (typeof notificationRef.class === 'string') {
      this.notifierClasses.push(notificationRef.class);
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
  notifierClasses: string[];

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

  ngAfterViewInit() {
    this.notifierClasses.forEach(cls => {
      this.renderer.addClass(this.elementRef.nativeElement, cls);
    });
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
