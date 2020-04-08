import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { VCLCoreContentProjectionModule } from '../core';

import { DataListComponent, DataListFooterDirective, DataListHeaderDirective } from './data-list.component';
import { DataListItemComponent } from './data-list-item.component';
import { DATA_LIST_TOKEN, DataList, DataListItem, DATA_LIST_ITEM_TOKEN } from './types';

export { DataListComponent, DataListItemComponent, DATA_LIST_TOKEN, DataList, DataListItem, DATA_LIST_ITEM_TOKEN, DataListFooterDirective, DataListHeaderDirective };

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLFormControlGroupModule, VCLCoreContentProjectionModule],
  exports: [DataListComponent, DataListItemComponent, VCLCoreContentProjectionModule, DataListFooterDirective, DataListHeaderDirective],
  declarations: [DataListComponent, DataListItemComponent, DataListFooterDirective, DataListHeaderDirective],
  providers: [],
})
export class VCLDataListModule { }
