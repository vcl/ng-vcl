import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Injectable, HostListener, Input, Output, EventEmitter, ViewEncapsulation, trigger, state, transition, animate, style } from '@angular/core';
import { NotificationOptions, NotificationType } from './types';
import { Notification } from './notification';

@Component({
  templateUrl: 'notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
     .vclLayerNotificationTopRight { left: auto; bottom: auto; top: 1em; right: 1em; }
     .vclLayerNotificationTop { left: 0; bottom: auto; top: 1em; right: 0; }
     .vclLayerNotificationTopLeft { left: 1em; bottom: auto; top: 1em; right: auto; }
     .vclLayerNotificationBottomRight { left: auto; bottom: 1em; top: auto; right: 1em; }
     .vclLayerNotificationBottom { left: 0; bottom: 1em; top: auto; right: 0; }
     .vclLayerNotificationBottomLeft { left: 1em; bottom: 1em; top: auto; right: auto; }
    `
  ],
  animations: [
    trigger('notificationState', [
      state('visible' , style({ opacity: 0.91 })),
      state('hovered' , style({ opacity: 1.0 })),
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms ease-in')
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0 }))
      ]),
      transition('visible <=> hovered', animate('300ms'))
    ]),
  ],
  host: {
    '[@notificationState]': 'true'
  },
})
export class NotificationComponent  {
  @Input()
  notifications: Notification[] = [];
}
