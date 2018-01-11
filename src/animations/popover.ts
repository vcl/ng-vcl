import { NgModule } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { PopoverAnimationConfig, POPOVER_ANIMATIONS } from '@ng-vcl/ng-vcl';

export const POPOVER_ANIMATIONS_PROVIDER: PopoverAnimationConfig = {
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
    provide: POPOVER_ANIMATIONS,
    useValue: POPOVER_ANIMATIONS_PROVIDER
  }]
})
export class PopoverAnimationsModule { }
