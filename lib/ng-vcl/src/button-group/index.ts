import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './button-group.component';
import { VCLButtonModule } from '../button/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';

export { ButtonGroupComponent };

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLFormControlGroupModule],
  exports: [ButtonGroupComponent, VCLButtonModule],
  declarations: [ButtonGroupComponent],
  providers: [],
})
export class VCLButtonGroupModule {}
