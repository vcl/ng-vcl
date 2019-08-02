import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';

import { SelectListComponent } from './select-list.component';
import { SelectListHeaderComponent } from './components/select-list-header.component';
import { SelectListItemComponent, SelectListLabelComponent, SelectListSublabelComponent } from './components/select-list-item.component';
import { SelectListSeparatorComponent } from './components/select-list-separator.component';
import { SelectListContentComponent } from './components/select-list-content.component';
import {  SELECT_LIST_TOKEN, SelectList, SelectListItem, SELECT_LIST_CONTENT_TOKEN } from './types';

export { SelectListComponent, SelectListHeaderComponent, SelectListItemComponent,
  SelectListLabelComponent, SelectListSublabelComponent, SelectListSeparatorComponent, SelectListContentComponent, SELECT_LIST_TOKEN, SelectList, SelectListItem, SELECT_LIST_CONTENT_TOKEN };

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLFormControlGroupModule],
  exports: [SelectListComponent, SelectListHeaderComponent, SelectListItemComponent, SelectListLabelComponent, SelectListSublabelComponent, SelectListSeparatorComponent, SelectListContentComponent],
  declarations: [SelectListComponent, SelectListHeaderComponent, SelectListItemComponent, SelectListLabelComponent, SelectListSublabelComponent, SelectListSeparatorComponent, SelectListContentComponent],
  providers: [],
})
export class VCLSelectListModule { }
