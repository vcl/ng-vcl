import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import {
  ButtonComponent,
  ButtonHost,
  BUTTON_HOST_TOKEN,
} from './button.component';

export { ButtonComponent, ButtonHost, BUTTON_HOST_TOKEN };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLIcogramModule],
  exports: [ButtonComponent, VCLIconModule, VCLIcogramModule],
  declarations: [ButtonComponent],
  providers: [],
})
export class VCLButtonModule {}
