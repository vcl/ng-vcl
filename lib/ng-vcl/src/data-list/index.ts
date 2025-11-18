import { NgModule } from '@angular/core';
import { VCLCoreContentProjectionModule } from '../core/index';

import {
  VCLDataListComponent,
  VCLDataListFooterDirective,
  VCLDataListHeaderDirective,
} from './data-list.component';
import { VCLDataListItemDirective } from './data-list-item.directive';
import {
  DATA_LIST_TOKEN,
  DataList,
  DataListItem,
  DATA_LIST_ITEM_TOKEN,
} from './types';

export {
  VCLDataListComponent,
  VCLDataListItemDirective,
  DATA_LIST_TOKEN,
  DataList,
  DataListItem,
  DATA_LIST_ITEM_TOKEN,
  VCLDataListFooterDirective,
  VCLDataListHeaderDirective,
};

@NgModule({
  imports: [
    VCLCoreContentProjectionModule,
    VCLDataListComponent,
    VCLDataListItemDirective,
    VCLDataListFooterDirective,
    VCLDataListHeaderDirective,
  ],
  exports: [
    VCLDataListComponent,
    VCLDataListItemDirective,
    VCLCoreContentProjectionModule,
    VCLDataListFooterDirective,
    VCLDataListHeaderDirective,
  ],
})
export class VCLDataListModule {}
