import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Notifier } from './notifier';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  templateUrl: 'notifier.component.html',
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
    trigger('notifierState', [
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
    '[@notifierState]': 'true'
  },
})
export class NotifierComponent  {
  @Input()
  notifiers: Notifier[] = [];
}
