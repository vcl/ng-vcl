import { trigger, state, transition, style, animate } from '@angular/animations';
import { PopoverComponent } from '@ng-vcl/ng-vcl';
import { setAnimations } from "./utils";

export function vclPopoverAnimations() {
  setAnimations(PopoverComponent, [
    trigger('popoverState', [
      state('open', style({ opacity: 1, display: 'block' })),
      state('void', style({ opacity: 0, display: 'none' })),
      transition('* => *', animate("300ms ease-in-out"))
    ])
  ]);
}
