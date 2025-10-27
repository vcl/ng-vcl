import { NgModule } from '@angular/core';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import {
  VCLButtonComponent,
  ButtonHost,
  BUTTON_HOST_TOKEN,
} from './button.component';

export { VCLButtonComponent, ButtonHost, BUTTON_HOST_TOKEN };

@NgModule({
  imports: [VCLButtonComponent],
  exports: [VCLIconModule, VCLIcogramModule, VCLButtonComponent],
})
export class VCLButtonModule {}
