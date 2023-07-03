import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLButtonModule } from '../button/index';
import { VCLCoreContentProjectionModule } from '../core/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import { VCLInputModule } from '../input/index';

import { DataListItemDirective } from './data-list-item.directive';
import {
  DataListComponent,
  DataListFooterDirective,
  DataListHeaderDirective,
} from './data-list.component';
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
    CommonModule,
    VCLInputModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLFormControlGroupModule,
    VCLCoreContentProjectionModule,
  ],
  exports: [
    DataListComponent,
    DataListItemDirective,
    VCLCoreContentProjectionModule,
    DataListFooterDirective,
    DataListHeaderDirective,
  ],
  declarations: [
    DataListComponent,
    DataListItemDirective,
    DataListFooterDirective,
    DataListHeaderDirective,
  ],
  providers: [],
})
export class VCLDataListModule {}
