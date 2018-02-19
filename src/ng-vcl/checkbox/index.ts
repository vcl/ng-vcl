import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from './../l10n/index';
import { VCLIconModule } from './../icon/index';
import { VCLFormControlLabelModule } from './../form-control-label/index';
import { CheckboxComponent } from './checkbox.component';

export { CheckboxComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLFormControlLabelModule, L10nModule],
  exports: [CheckboxComponent],
  declarations: [CheckboxComponent]
})
export class VCLCheckboxModule { }
