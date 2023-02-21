import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/index';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from './radio-group.component';
import { VCLFormControlGroupModule } from '../form-control-group/index';

export { RadioButtonComponent, RadioGroupComponent, VCLFormControlGroupModule };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [RadioButtonComponent, RadioGroupComponent],
  declarations: [RadioButtonComponent, RadioGroupComponent],
})
export class VCLRadioButtonModule {}
