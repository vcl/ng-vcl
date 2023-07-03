import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';

import { BusyIndicatorCoverComponent } from './busy-indicator-cover.component';
import { BusyIndicatorComponent } from './busy-indicator.component';
export { BusyIndicatorCoverComponent, BusyIndicatorComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLIcogramModule],
  exports: [BusyIndicatorCoverComponent, BusyIndicatorComponent],
  declarations: [BusyIndicatorCoverComponent, BusyIndicatorComponent],
})
export class VCLBusyIndicatorModule {}
