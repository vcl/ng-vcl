import { NgModule } from '@angular/core';
import { VCLBusyIndicatorComponent } from './busy-indicator.component';
import { VCLBusyIndicatorCoverComponent } from './busy-indicator-cover.component';

export { VCLBusyIndicatorCoverComponent, VCLBusyIndicatorComponent };

@NgModule({
  imports: [VCLBusyIndicatorComponent, VCLBusyIndicatorCoverComponent],
  exports: [VCLBusyIndicatorComponent, VCLBusyIndicatorCoverComponent],
})
export class VCLBusyIndicatorModule {}
