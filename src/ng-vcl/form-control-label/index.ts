import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { L10nModule } from '../l10n/index';
import { FormControlLabelComponent } from './form-control-label.component';

@NgModule({
  imports: [CommonModule, VCLIconModule, L10nModule],
  exports: [FormControlLabelComponent],
  declarations: [FormControlLabelComponent]
})
export class VCLFormControlLabelModule { }
