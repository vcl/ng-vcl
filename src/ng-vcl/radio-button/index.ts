import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/index';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from './radio-group.component';
import { VCLFormControlLabelModule } from "../form-control-label/index";

export { RadioButtonComponent, RadioGroupComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLFormControlLabelModule],
  exports: [RadioButtonComponent, RadioGroupComponent],
  declarations: [RadioButtonComponent, RadioGroupComponent]
})
export class VCLRadioButtonModule { }
