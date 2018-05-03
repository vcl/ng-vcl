import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { FormControlLabelComponent } from './form-control-label.component';

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [FormControlLabelComponent],
  declarations: [FormControlLabelComponent]
})
export class VCLFormControlLabelModule { }
