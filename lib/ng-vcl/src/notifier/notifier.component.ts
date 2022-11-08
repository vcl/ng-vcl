import {
  Component,
  HostBinding,
  HostListener,
  Inject,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  Optional,
  OnInit,
} from '@angular/core';
import { AnimationEvent, useAnimation } from '@angular/animations';
import { trigger, transition } from '@angular/animations';
import { NOTIFICATION_TYPE_CLASS_MAP } from '../notification/index';
import { NOTIFIER_CONFIG_TOKEN, NotifierConfig } from './types';
import {
  stateVoidOpenAnimation,
  stateOpenClosingAnimation,
} from './animations';
import {
  NOTIFIER_ANIMATION_PARAMS_TOKEN,
  NotificationAnimationParams,
} from './types';
import { NotifierOverlayRef } from './notifier-overlay-ref';

export type NotificationAnimationState = 'open' | 'closing' | 'closed';

@Component({
  selector: 'vcl-notifier-overlay',
  templateUrl: './notifier.component.html',
  animations: [
    trigger('stateAnimation', [
      transition('void => open', useAnimation(stateVoidOpenAnimation)),
      transition('open => closing', useAnimation(stateOpenClosingAnimation)),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host .notification-header:empty {
        display: none;
      }
      :host .notification-footer:empty {
        display: none;
      }
    `,
  ],
})
export class NotifierComponent implements OnInit {
  constructor(
    @Inject(NOTIFIER_ANIMATION_PARAMS_TOKEN)
    private _animationParams: NotificationAnimationParams,
    @Inject(NOTIFIER_CONFIG_TOKEN)
    private _config: NotifierConfig,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    public notifierOverlayRef: NotifierOverlayRef
  ) {
    this.type = this.notifierOverlayRef.type;
    this.icon = this.notifierOverlayRef.icon;
    this.showCloseButton = notifierOverlayRef.showCloseButton;

    let timeout: number | false;
    if (
      typeof notifierOverlayRef.timeout === 'number' ||
      notifierOverlayRef.timeout === false
    ) {
      timeout = notifierOverlayRef.timeout;
    } else {
      timeout = this._config.timeout;
    }

    if (timeout !== false) {
      setTimeout(() => {
        this.state = 'closing';
      }, timeout);
    }

    if (typeof notifierOverlayRef.class === 'string') {
      this.notifierClasses.push(notifierOverlayRef.class);
    }
  }

  @HostBinding('class.notification')
  hostClasses = true;

  state: NotificationAnimationState = 'open';

  type?: string;
  icon?: string | boolean;
  showCloseButton?: Boolean;

  notifierClasses: string[] = [];
  typeIcon?: string = undefined;

  get hasIcon() {
    return (
      this.icon !== false &&
      (typeof this.icon === 'string' || typeof this.typeIcon === 'string')
    );
  }

  onCloseClick() {
    if (this.notifierOverlayRef) {
      this.state = 'closing';
    }
  }

  @HostBinding('@stateAnimation')
  get fadeAnimation() {
    return {
      value: this.state,
      params: this._animationParams,
    };
  }

  ngOnInit() {
    const type = NOTIFICATION_TYPE_CLASS_MAP[this.type];
    if (type) {
      this.typeIcon = type.icon;
      this.notifierClasses.push(type.class);
    }

    this.notifierClasses.forEach(cls => {
      this.renderer.addClass(this.elementRef.nativeElement, cls);
    });
  }

  @HostListener('@stateAnimation.done', ['$event'])
  onFadeFinished(event: AnimationEvent) {
    const isClosingOut =
      (event.toState as NotificationAnimationState) === 'closing';
    const itFinished = this.state === 'closing';

    if (isClosingOut && itFinished) {
      this.state = 'closed';
      this.notifierOverlayRef.destroy();
    }
  }
}
