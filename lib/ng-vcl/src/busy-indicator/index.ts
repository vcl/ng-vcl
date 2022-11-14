import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { VCLIcogramModule } from '../icogram/index';
import { BusyIndicatorComponent } from './busy-indicator.component';
import { BusyIndicatorCoverComponent } from './busy-indicator-cover.component';

export { BusyIndicatorCoverComponent, BusyIndicatorComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLIcogramModule],
  exports: [BusyIndicatorCoverComponent, BusyIndicatorComponent],
  declarations: [BusyIndicatorCoverComponent, BusyIndicatorComponent],
})
export class VCLBusyIndicatorModule {}
