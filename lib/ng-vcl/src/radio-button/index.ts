import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/index';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from './radio-group.component';
import { RadioButtonLabelDirective } from './radio-button-label.directive';
import { VCLFormControlGroupModule } from '../form-control-group/index';

export { RadioButtonComponent, RadioGroupComponent, RadioButtonLabelDirective, VCLFormControlGroupModule };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [RadioButtonComponent, RadioGroupComponent, RadioButtonLabelDirective],
  declarations: [RadioButtonComponent, RadioGroupComponent, RadioButtonLabelDirective]
})
export class VCLRadioButtonModule { }
