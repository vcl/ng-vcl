import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { VCLIconModule } from '../icon';
import { VCLButtonModule } from '../button';

import { DropdownComponent } from './dropdown.component';
import { DropdownHeaderComponent } from './components/dropdown-header.component';
import { DropdownItemComponent } from './components/dropdown-item.component';
import { DropdownLabelItemComponent } from './components/dropdown-label-item.component';
import { DropdownSeperatorComponent } from './components/dropdown-seperator.component';
import { DropdownInputDirective } from './dropdown-input.directive';
import { SelectComponent } from './select.component';
import { VCLInputModule } from '../input';
import { VCLIcogramModule } from '../icogram';


export { DropdownComponent, DropdownHeaderComponent, DropdownItemComponent, DropdownLabelItemComponent, DropdownSeperatorComponent, DropdownInputDirective, SelectComponent };

@NgModule({
  imports: [CommonModule, OverlayModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule],
  exports: [DropdownComponent, DropdownHeaderComponent, DropdownItemComponent, DropdownLabelItemComponent, DropdownSeperatorComponent, DropdownInputDirective, SelectComponent],
  declarations: [DropdownComponent, DropdownHeaderComponent, DropdownItemComponent, DropdownLabelItemComponent, DropdownSeperatorComponent, DropdownInputDirective, SelectComponent],
  providers: [],
})
export class VCLDropdownModule { }
