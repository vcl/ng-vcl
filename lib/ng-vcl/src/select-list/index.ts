import { NgModule } from '@angular/core';
import { VCLCoreLabelModule } from '../core/index';

import { SelectListComponent } from './select-list.component';
import { SelectListHeaderComponent } from './components/select-list-header.component';
import { SelectListItemComponent } from './components/select-list-item.component';
import { SelectListSeparatorComponent } from './components/select-list-separator.component';
import { SelectListContentComponent } from './components/select-list-content.component';
import {
  SELECT_LIST_TOKEN,
  SelectList,
  SelectListItem,
  SELECT_LIST_CONTENT_TOKEN,
} from './types';

export {
  SelectListComponent,
  SelectListHeaderComponent,
  SelectListItemComponent,
  SelectListSeparatorComponent,
  SelectListContentComponent,
  SELECT_LIST_TOKEN,
  SelectList,
  SelectListItem,
  SELECT_LIST_CONTENT_TOKEN,
};

@NgModule({
  imports: [
    SelectListComponent,
    SelectListHeaderComponent,
    SelectListItemComponent,
    SelectListSeparatorComponent,
    SelectListContentComponent,
  ],
  exports: [
    SelectListComponent,
    SelectListHeaderComponent,
    SelectListItemComponent,
    SelectListSeparatorComponent,
    SelectListContentComponent,
    VCLCoreLabelModule,
  ],
})
export class VCLSelectListModule {}
