import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VCLInputModule } from '../input/index';
import { VCLSelectListModule } from '../select-list/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { VCLOffClickModule } from '../off-click';

import { SelectComponent } from './select.component';
import { VCLIconModule } from '../icon';

export { SelectComponent };

@NgModule({
  imports: [
    CommonModule,
    SelectComponent,
    VCLInputModule,
    VCLSelectListModule,
    VCLFormControlGroupModule,
  ],
  exports: [
    SelectComponent,
    VCLSelectListModule,
    VCLFormControlGroupModule,
    VCLInputModule,
    VCLIconModule,
  ],
  providers: [],
})
export class VCLSelectModule {}
