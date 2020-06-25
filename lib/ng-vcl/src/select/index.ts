import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLSelectListModule } from '../select-list/index';
import { VCLFormControlGroupModule } from '../form-control-group/index';

import { SelectComponent } from './select.component';

export { SelectComponent };

@NgModule({
  imports: [CommonModule, OverlayModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLSelectListModule, VCLFormControlGroupModule],
  exports: [SelectComponent, VCLSelectListModule, VCLFormControlGroupModule, VCLInputModule],
  declarations: [SelectComponent],
  providers: [],
})
export class VCLSelectModule { }
