import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLDropdownModule } from '../dropdown/index';
import { VCLButtonModule } from '../button/index';
import { L10nModule } from '../l10n/index';
import { VCLOffClickModule } from '../off-click/index';
import { VCLPopoverModule } from '../popover/index';
import { SelectOptionComponent } from './select-option.component';
import { SelectComponent } from './select.component';

export { SelectComponent, SelectOptionComponent };

@NgModule({
  imports: [CommonModule, L10nModule, VCLDropdownModule, VCLButtonModule, VCLOffClickModule, VCLPopoverModule ],
  exports: [SelectComponent, SelectOptionComponent],
  declarations: [SelectComponent, SelectOptionComponent],
  providers: []
})
export class VCLSelectModule { }
