import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { VCLIconModule } from '../icon';
import { VCLButtonModule } from '../button';

import { DropdownComponent } from './dropdown.component';
import { DropdownHeaderComponent } from './components/dropdown-header.component';
import { DropdownItemComponent, DropdownLabelDirective, DropdownSublabelDirective } from './components/dropdown-item.component';
import { DropdownSeperatorComponent } from './components/dropdown-seperator.component';
import { DropdownContentComponent } from './components/dropdown-content.component';
import { DropdownInputDirective } from './dropdown-input.directive';
import { VCLInputModule } from '../input';
import { VCLIcogramModule } from '../icogram';

export { DropdownComponent, DropdownHeaderComponent, DropdownItemComponent, DropdownLabelDirective, DropdownSublabelDirective, DropdownSeperatorComponent, DropdownContentComponent, DropdownInputDirective };

@NgModule({
  imports: [CommonModule, OverlayModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule],
  exports: [DropdownComponent, DropdownHeaderComponent, DropdownItemComponent, DropdownLabelDirective, DropdownSublabelDirective, DropdownSeperatorComponent, DropdownContentComponent, DropdownInputDirective],
  declarations: [DropdownComponent, DropdownHeaderComponent, DropdownItemComponent, DropdownLabelDirective, DropdownSublabelDirective, DropdownSeperatorComponent, DropdownContentComponent, DropdownInputDirective],
  providers: [],
})
export class VCLDropdownModule { }
