import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLFormControlGroupModule } from '../form-control-group/index';

import { VCLIconModule } from './../icon/index';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from './radio-group.component';

export { RadioButtonComponent, RadioGroupComponent, VCLFormControlGroupModule };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [RadioButtonComponent, RadioGroupComponent],
  declarations: [RadioButtonComponent, RadioGroupComponent],
})
export class VCLRadioButtonModule {}
