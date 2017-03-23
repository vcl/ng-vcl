import { trigger, state, transition, style, animate } from '@angular/animations';
import { setAnimations, LayerContainerComponent } from '@ng-vcl/ng-vcl';

export function vclLayerAnimations() {
  setAnimations(LayerContainerComponent, [
    trigger('boxState', [
      state('*', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms ease-in-out')
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({opacity: 0}))
      ])
    ]),
    trigger('layerState', [
      state('*', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms ease-in-out')
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]);
}
