import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLButtonModule } from '../button/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';

import { ButtonGroupComponent } from './button-group.component';

export { ButtonGroupComponent };

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLFormControlGroupModule],
  exports: [ButtonGroupComponent, VCLButtonModule],
  declarations: [ButtonGroupComponent],
  providers: [],
})
export class VCLButtonGroupModule {}
