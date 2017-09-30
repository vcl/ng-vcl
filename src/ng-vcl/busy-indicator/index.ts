import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { VCLIcogramModule } from '../icogram/index';
import { BusyIndicatorComponent } from './busy-indicator.component';
import { BusyComponent } from './busy.component';

export { BusyComponent, BusyIndicatorComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLIcogramModule],
  exports: [BusyComponent, BusyIndicatorComponent],
  declarations: [BusyComponent, BusyIndicatorComponent]
})
export class VCLBusyIndicatorModule { }
