import { NgModule } from '@angular/core';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import {
  ButtonComponent,
  ButtonHost,
  BUTTON_HOST_TOKEN,
} from './button.component';

export { ButtonComponent, ButtonHost, BUTTON_HOST_TOKEN };

@NgModule({
  imports: [ButtonComponent],
  exports: [VCLIconModule, VCLIcogramModule, ButtonComponent],
})
export class VCLButtonModule {}
