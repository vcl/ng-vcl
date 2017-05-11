import { trigger, state, transition, style, animate } from '@angular/animations';
import { NotificationComponent } from '@ng-vcl/ng-vcl';
import { setAnimations } from "./utils";

export function vclNotificationAnimations() {
  setAnimations(NotificationComponent, [
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
  ]);
}
