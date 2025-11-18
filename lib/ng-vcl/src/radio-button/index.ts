import { NgModule } from '@angular/core';
import { VCLRadioButtonComponent } from './radio-button.component';
import { VCLRadioGroupComponent } from './radio-group.component';
import { VCLFormControlGroupModule } from '../form-control-group/index';

export {
  VCLRadioButtonComponent,
  VCLRadioGroupComponent,
  VCLFormControlGroupModule,
};

@NgModule({
  imports: [VCLRadioButtonComponent, VCLRadioGroupComponent],
  exports: [VCLRadioButtonComponent, VCLRadioGroupComponent],
})
export class VCLRadioButtonModule {}
