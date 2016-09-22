import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLDropdownModule } from '../dropdown/dropdown.module';
import { VCLButtonModule } from '../button/button.module';
import { SelectComponent } from './select.component';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLDropdownModule, VCLButtonModule],
  exports: [SelectComponent],
  declarations: [SelectComponent],
  providers: [],
})
export class VCLSelectModule { }
