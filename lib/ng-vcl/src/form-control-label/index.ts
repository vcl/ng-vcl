import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { FormControlLabelComponent } from './form-control-label.component';
// import { FormControlLabelWrappingComponent } from './form-control-label-wrapping.component';
import { FORM_CONTROL_LABEL_MEMBER_TOKEN, FormControlLabelMember } from './interfaces';

export { FormControlLabelComponent, FORM_CONTROL_LABEL_MEMBER_TOKEN, FormControlLabelMember };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [FormControlLabelComponent],
  declarations: [FormControlLabelComponent]
})
export class VCLFormControlLabelModule { }
