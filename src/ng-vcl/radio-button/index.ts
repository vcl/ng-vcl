import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/index';
import { RadioButtonComponent } from './radio-button.component';

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [RadioButtonComponent],
  declarations: [RadioButtonComponent]
})
export class VCLRadioButtonModule { }
