import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLDropdownModule } from '../dropdown/index';

import { SelectComponent } from './select.component';

export { SelectComponent };

@NgModule({
  imports: [CommonModule, OverlayModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLDropdownModule],
  exports: [SelectComponent, VCLDropdownModule],
  declarations: [SelectComponent],
  providers: [],
})
export class VCLSelectModule { }
