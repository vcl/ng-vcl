import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLDropdownModule } from '../dropdown/index';
import { VCLButtonModule } from '../button/index';
import { VCLOffClickModule } from '../off-click/index';
import { VCLPopoverModule } from '../popover/index';
import { VCLTokenModule } from '../token/index';
import { SelectOption } from './select-option.component';
import { SelectComponent, DropDirection } from './select.component';

export { SelectComponent, SelectOption, DropDirection };

@NgModule({
  imports: [CommonModule, VCLDropdownModule, VCLButtonModule, VCLOffClickModule, VCLPopoverModule, VCLTokenModule],
  exports: [SelectComponent, SelectOption],
  declarations: [SelectComponent, SelectOption],
  providers: []
})
export class VCLSelectModule { }
