import { NgModule } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { LayerAnimationConfig, LAYER_ANIMATIONS } from '@ng-vcl/ng-vcl';

export const LAYER_ANIMATIONS_PROVIDER: LayerAnimationConfig = {
  boxEnter: [
    style({opacity: 0}),
    animate('200ms ease-in-out', style({opacity: 1}))
  ],
  boxLeave: [
    style({opacity: 1}),
    animate('200ms ease-in-out', style({opacity: 0}))
  ],
  coverEnter: [
    style({opacity: 0}),
    animate('200ms ease-in-out', style({opacity: 1}))
  ],
  coverLeave: [
    style({opacity: 1}),
    animate('200ms ease-in-out', style({opacity: 0}))
  ]
};

@NgModule({
  providers: [{
    provide: LAYER_ANIMATIONS,
    useValue: LAYER_ANIMATIONS_PROVIDER
  }]
})
export class LayerAnimationsModule { }
