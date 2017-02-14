import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';
import { VCLMetalistModule } from '../metalist/index';
import { L10nModule } from '../l10n/index';

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule],
  exports: [LabelComponent],
  declarations: [LabelComponent],
  providers: [],
})
export class VCLLabelModule { }
