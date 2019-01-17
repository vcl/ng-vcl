import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLWormholeModule } from '../wormhole/index';
import { VCLMetalistModule } from '../metalist/index';
import { DropdownComponent, DROPDOWN_ANIMATIONS, DropdownAnimationConfig } from './dropdown.component';
import { DropdownOptionComponent } from './dropdown-option.component';
import { VCLIcogramModule } from '../icogram/index';
export { DropdownOptionComponent, DropdownComponent, DROPDOWN_ANIMATIONS, DropdownAnimationConfig };

@NgModule({
  imports: [CommonModule, VCLMetalistModule, VCLWormholeModule, VCLIcogramModule],
  exports: [DropdownComponent, DropdownOptionComponent],
  declarations: [DropdownComponent, DropdownOptionComponent],
  providers: [],
})
export class VCLDropdownModule { }
