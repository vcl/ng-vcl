import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { VCLIconModule } from '../icon';
import { VCLButtonModule } from '../button';
import { VCLInputModule } from '../input';
import { VCLIcogramModule } from '../icogram';
import { VCLDropdownModule } from '../dropdown';

import { SelectComponent } from './select.component';

export { SelectComponent };

@NgModule({
  imports: [CommonModule, OverlayModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLDropdownModule],
  exports: [SelectComponent, VCLDropdownModule],
  declarations: [SelectComponent],
  providers: [],
})
export class VCLSelectModule { }
