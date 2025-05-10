import { NgModule } from '@angular/core';
import { VCLCoreContentProjectionModule } from '../core/index';

import {
  DataListComponent,
  DataListFooterDirective,
  DataListHeaderDirective,
} from './data-list.component';
import { DataListItemDirective } from './data-list-item.directive';
import {
  DATA_LIST_TOKEN,
  DataList,
  DataListItem,
  DATA_LIST_ITEM_TOKEN,
} from './types';

export {
  DataListComponent,
  DataListItemDirective,
  DATA_LIST_TOKEN,
  DataList,
  DataListItem,
  DATA_LIST_ITEM_TOKEN,
  DataListFooterDirective,
  DataListHeaderDirective,
};

@NgModule({
  imports: [
    VCLCoreContentProjectionModule,
    DataListComponent,
    DataListItemDirective,
    DataListFooterDirective,
    DataListHeaderDirective,
  ],
  exports: [
    DataListComponent,
    DataListItemDirective,
    VCLCoreContentProjectionModule,
    DataListFooterDirective,
    DataListHeaderDirective,
  ],
})
export class VCLDataListModule {}
