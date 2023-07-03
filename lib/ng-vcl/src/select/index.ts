import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLButtonModule } from '../button/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import { VCLInputModule } from '../input/index';
import { VCLOffClickModule } from '../off-click';
import { VCLSelectListModule } from '../select-list/index';

import { SelectComponent } from './select.component';

export { SelectComponent };

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    VCLInputModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLSelectListModule,
    VCLFormControlGroupModule,
    VCLOffClickModule,
  ],
  exports: [
    SelectComponent,
    VCLSelectListModule,
    VCLFormControlGroupModule,
    VCLInputModule,
  ],
  declarations: [SelectComponent],
  providers: [],
})
export class VCLSelectModule {}
