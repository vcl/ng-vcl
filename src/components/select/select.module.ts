import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLDropdownModule } from '../dropdown/dropdown.module';
import { VCLButtonModule } from '../button/button.module';
import { SelectComponent } from './select.component';
import { L10nModule } from '../../l10n/l10n.module';
import { VCLOffClickModule } from '../../directives/off-click/off-click.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLDropdownModule, VCLButtonModule, VCLOffClickModule],
  exports: [SelectComponent],
  declarations: [SelectComponent],
  providers: [],
})
export class VCLSelectModule { }

