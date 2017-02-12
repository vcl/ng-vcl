import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLDropdownModule } from '../dropdown/dropdown.module';
import { VCLButtonModule } from '../button/button.module';
import { SelectComponent, SelectOptionComponent } from './select.component';
import { VCLPopoverModule } from '../popover/popover.module';
import { L10nModule } from '../l10n/l10n.module';
import { VCLOffClickModule } from '../off-click/off-click.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLDropdownModule, VCLButtonModule, VCLOffClickModule, VCLPopoverModule ],
  exports: [SelectComponent, SelectOptionComponent],
  declarations: [SelectComponent, SelectOptionComponent],
  providers: []
})
export class VCLSelectModule { }
