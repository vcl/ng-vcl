import { animation, style, animate } from '@angular/animations';

export const stateVoidOpenAnimation = animation([
  style({ opacity: 0 }),
  animate('{{openClosingTime}}ms', style({ opacity: 1 })),
]);

export const stateOpenClosingAnimation = animation([
  style({ opacity: 1 }),
  animate('{{voidOpenTime}}ms', style({ opacity: 0 })),
]);
