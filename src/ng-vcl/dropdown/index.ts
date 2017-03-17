import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownOptionComponent, DropdownItem } from './dropdown-option.component';
import { L10nModule } from '../l10n/index';
import { VCLWormholeModule } from '../wormhole/index';

export { DropdownItem, DropdownComponent, DropdownOptionComponent }

@NgModule({
  imports: [CommonModule, L10nModule, VCLWormholeModule],
  exports: [DropdownComponent, DropdownOptionComponent],
  declarations: [DropdownComponent, DropdownOptionComponent],
  providers: [],
})
export class VCLDropdownModule { }
