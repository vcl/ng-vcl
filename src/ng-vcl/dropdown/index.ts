import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { VCLWormholeModule } from '../wormhole/index';
import { VCLMetalistModule } from "../metalist/index";
import { DropdownComponent } from './dropdown.component';
import { DropdownOption } from './dropdown-option.component';

export { DropdownOption, DropdownComponent };

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule, VCLWormholeModule],
  exports: [DropdownComponent, DropdownOption],
  declarations: [DropdownComponent, DropdownOption],
  providers: [],
})
export class VCLDropdownModule { }
