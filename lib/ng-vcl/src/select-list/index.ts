import { NgModule } from '@angular/core';
import { VCLCoreLabelModule } from '../core/index';

import { VCLSelectListComponent } from './select-list.component';
import { VCLSelectListHeaderComponent } from './components/select-list-header.component';
import { VCLSelectListItemComponent } from './components/select-list-item.component';
import { VCLSelectListSeparatorComponent } from './components/select-list-separator.component';
import { VCLSelectListContentComponent } from './components/select-list-content.component';
import {
  SELECT_LIST_TOKEN,
  SelectList,
  SelectListItem,
  SELECT_LIST_CONTENT_TOKEN,
} from './types';

export {
  VCLSelectListComponent,
  VCLSelectListHeaderComponent,
  VCLSelectListItemComponent,
  VCLSelectListSeparatorComponent,
  VCLSelectListContentComponent,
  SELECT_LIST_TOKEN,
  SelectList,
  SelectListItem,
  SELECT_LIST_CONTENT_TOKEN,
};

@NgModule({
  imports: [
    VCLSelectListComponent,
    VCLSelectListHeaderComponent,
    VCLSelectListItemComponent,
    VCLSelectListSeparatorComponent,
    VCLSelectListContentComponent,
  ],
  exports: [
    VCLSelectListComponent,
    VCLSelectListHeaderComponent,
    VCLSelectListItemComponent,
    VCLSelectListSeparatorComponent,
    VCLSelectListContentComponent,
    VCLCoreLabelModule,
  ],
})
export class VCLSelectListModule {}
