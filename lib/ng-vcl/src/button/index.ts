import { NgModule } from '@angular/core';

import {
  VCLButtonComponent,
  ButtonHost,
  BUTTON_HOST_TOKEN,
} from './button.component';

export { VCLButtonComponent, ButtonHost, BUTTON_HOST_TOKEN };

@NgModule({
  imports: [VCLButtonComponent],
  exports: [VCLButtonComponent],
  providers: [],
})
export class VCLButtonModule {}
