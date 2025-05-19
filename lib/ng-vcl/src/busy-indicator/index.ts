import { NgModule } from '@angular/core';
import { BusyIndicatorComponent } from './busy-indicator.component';
import { BusyIndicatorCoverComponent } from './busy-indicator-cover.component';

export { BusyIndicatorCoverComponent, BusyIndicatorComponent };

@NgModule({
  imports: [BusyIndicatorCoverComponent, BusyIndicatorComponent],
  exports: [BusyIndicatorCoverComponent, BusyIndicatorComponent],
})
export class VCLBusyIndicatorModule {}
