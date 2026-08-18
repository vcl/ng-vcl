import { NgModule } from '@angular/core';
import { VCLBusyIndicatorComponent } from './busy-indicator.component';
import { VCLBusyIndicatorCoverComponent } from './busy-indicator-cover.component';

export { VCLBusyIndicatorCoverComponent, VCLBusyIndicatorComponent };

@NgModule({
  imports: [VCLBusyIndicatorCoverComponent, VCLBusyIndicatorComponent],
  exports: [VCLBusyIndicatorCoverComponent, VCLBusyIndicatorComponent],
  declarations: [],
})
export class VCLBusyIndicatorModule {}
