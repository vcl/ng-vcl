import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { VCLWormholeModule } from '../wormhole/index';
import { VCLMetalistModule } from "../metalist/index";
import { DropdownComponent } from './dropdown.component';
import { DropdownOptionComponent, DropdownItem } from './dropdown-option.component';

export { DropdownItem, DropdownComponent, DropdownOptionComponent };

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule, VCLWormholeModule],
  exports: [DropdownComponent, DropdownOptionComponent],
  declarations: [DropdownComponent, DropdownOptionComponent],
  providers: [],
})
export class VCLDropdownModule { }
