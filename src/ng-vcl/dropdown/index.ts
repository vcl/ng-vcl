import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent, DropdownOptionComponent, DropdownItem, DropdownOptionBase } from './dropdown.component';
import { VCLMetalistModule } from '../metalist/index';
import { L10nModule } from '../l10n/index';

export { DropdownItem, DropdownComponent, DropdownOptionComponent, DropdownOptionBase }

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule],
  exports: [DropdownComponent, DropdownOptionComponent],
  declarations: [DropdownComponent, DropdownOptionComponent],
  providers: [],
})
export class VCLDropdownModule { }
