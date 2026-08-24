import { NgModule } from '@angular/core';

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
  DataListMode,
} from './types';
import { VCLCoreContentProjectionModule } from '../core';

export {
  DataListMode,
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
    VCLDataListComponent,
    VCLDataListItemDirective,
    VCLDataListFooterDirective,
    VCLDataListHeaderDirective,
    VCLCoreContentProjectionModule,
  ],
  exports: [
    VCLDataListComponent,
    VCLDataListItemDirective,
    VCLDataListFooterDirective,
    VCLDataListHeaderDirective,
    VCLCoreContentProjectionModule,
  ],
  declarations: [],
  providers: [],
})
export class VCLDataListModule {}
