import { trigger, state, transition, style, animate } from '@angular/animations';
import { setAnimations, PopoverComponent } from '@ng-vcl/ng-vcl';

export function vclPopoverAnimations() {
  setAnimations(PopoverComponent, [
    trigger('popoverState', [
      state('open', style({ opacity: 1, display: 'block' })),
      state('void', style({ opacity: 0, display: 'none' })),
      transition('* => *', animate("300ms ease-in-out"))
    ])
  ]);
}
