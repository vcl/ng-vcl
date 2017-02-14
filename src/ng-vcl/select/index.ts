import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLDropdownModule } from '../dropdown/index';
import { VCLButtonModule } from '../button/index';
import { SelectComponent, SelectOptionComponent } from './select.component';
import { VCLPopoverModule } from '../popover/index';
import { L10nModule } from '../l10n/index';
import { VCLOffClickModule } from '../off-click/index';

@NgModule({
  imports: [CommonModule, L10nModule, VCLDropdownModule, VCLButtonModule, VCLOffClickModule, VCLPopoverModule ],
  exports: [SelectComponent, SelectOptionComponent],
  declarations: [SelectComponent, SelectOptionComponent],
  providers: []
})
export class VCLSelectModule { }
