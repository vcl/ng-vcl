import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelDirective } from './label.component';
import { VCLMetalistModule } from '../metalist/index';

@NgModule({
  imports: [CommonModule, VCLMetalistModule],
  exports: [LabelDirective],
  declarations: [LabelDirective],
  providers: [],
})
export class VCLLabelModule { }
