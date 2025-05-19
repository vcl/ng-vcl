import { NgModule } from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from './radio-group.component';
import { VCLFormControlGroupModule } from '../form-control-group/index';

export { RadioButtonComponent, RadioGroupComponent, VCLFormControlGroupModule };

@NgModule({
  imports: [RadioButtonComponent, RadioGroupComponent],
  exports: [RadioButtonComponent, RadioGroupComponent],
})
export class VCLRadioButtonModule {}
