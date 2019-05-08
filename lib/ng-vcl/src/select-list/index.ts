import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIcogramModule } from '../icogram/index';

import { SelectListDirective } from './select-list.directive';
import { SelectListHeaderComponent } from './components/select-list-header.component';
import { SelectListItemComponent, SelectListLabelDirective, SelectListSublabelDirective } from './components/select-list-item.component';
import { SelectListSeparatorComponent } from './components/select-list-separator.component';
import { SelectListContentDirective } from './components/select-list-content.directive';

export { SelectListDirective, SelectListHeaderComponent, SelectListItemComponent, SelectListLabelDirective, SelectListSublabelDirective, SelectListSeparatorComponent, SelectListContentDirective };

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule],
  exports: [SelectListDirective, SelectListHeaderComponent, SelectListItemComponent, SelectListLabelDirective, SelectListSublabelDirective, SelectListSeparatorComponent, SelectListContentDirective],
  declarations: [SelectListDirective, SelectListHeaderComponent, SelectListItemComponent, SelectListLabelDirective, SelectListSublabelDirective, SelectListSeparatorComponent, SelectListContentDirective],
  providers: [],
})
export class VCLSelectListModule { }
