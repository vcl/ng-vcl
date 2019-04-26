import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/index';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupDirective } from './radio-group.directive';
import { RadioButtonLabelDirective } from './radio-button-label.directive';

export { RadioButtonComponent, RadioGroupDirective, RadioButtonLabelDirective };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [RadioButtonComponent, RadioGroupDirective, RadioButtonLabelDirective],
  declarations: [RadioButtonComponent, RadioGroupDirective, RadioButtonLabelDirective]
})
export class VCLRadioButtonModule { }
