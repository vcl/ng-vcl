import { NgModule } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DropdownAnimationConfig, DROPDOWN_ANIMATIONS } from '@ng-vcl/ng-vcl';

export const DROPDOWN_ANIMATIONS_PROVIDER: DropdownAnimationConfig = {
  enter: [
    style({ opacity: 0}),
    animate('300ms ease-in-out', style({ opacity: 1}))
  ],
  leave: [
    style({ opacity: 1}),
    animate('300ms ease-in-out', style({ opacity: 0}))
  ]
};

@NgModule({
  providers: [{
    provide: DROPDOWN_ANIMATIONS,
    useValue: DROPDOWN_ANIMATIONS_PROVIDER
  }]
})
export class DropdownAnimationsModule { }
