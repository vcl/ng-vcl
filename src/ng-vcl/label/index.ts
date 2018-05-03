import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';
import { VCLMetalistModule } from '../metalist/index';

@NgModule({
  imports: [CommonModule, VCLMetalistModule],
  exports: [LabelComponent],
  declarations: [LabelComponent],
  providers: [],
})
export class VCLLabelModule { }
