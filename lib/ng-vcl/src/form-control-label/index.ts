import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { FormControlLabelComponent } from './form-control-label.component';
import { FormControlLabelWrappingComponent } from './form-control-label-wrapping.component';

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [FormControlLabelComponent, FormControlLabelWrappingComponent],
  declarations: [FormControlLabelComponent, FormControlLabelWrappingComponent]
})
export class VCLFormControlLabelModule { }
