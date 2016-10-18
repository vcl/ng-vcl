import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from './../icon/icon.module';
import { FormControlLabelComponent } from './form-control-label.component';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, VCLIconModule, L10nModule],
  exports: [FormControlLabelComponent],
  declarations: [FormControlLabelComponent]
})
export class VCLFormControlLabelModule { }
