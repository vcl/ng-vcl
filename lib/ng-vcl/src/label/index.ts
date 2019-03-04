import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelDirective } from './label.directive';

@NgModule({
  imports: [CommonModule],
  exports: [LabelDirective],
  declarations: [LabelDirective],
  providers: [],
})
export class VCLLabelModule { }
