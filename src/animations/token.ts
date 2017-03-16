import { trigger, state, transition, style, animate, keyframes } from '@angular/core';
import { setAnimations, TokenComponent } from '@ng-vcl/ng-vcl';

export function vclTokenAnimations() {
  setAnimations(TokenComponent, [
    trigger('checkState', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 1 })),
      transition('0 => 1', [
        animate(600, keyframes([
          style({ transform: 'scale(1, 1)', offset: 0 }),
          style({ transform: 'scale(1.25, 0.75)', offset: 0.3 }),
          style({ transform: 'scale(0.75, 1.25)', offset: 0.4 }),
          style({ transform: 'scale(1.15, 0.85)', offset: 0.5 }),
          style({ transform: 'scale(.95, 1.05)', offset: 0.65 }),
          style({ transform: 'scale(1.05, .95)', offset: 0.75 }),
          style({ transform: 'scale(1, 1)', offset: 1 })
        ]))
      ])
    ])
  ]);
};
