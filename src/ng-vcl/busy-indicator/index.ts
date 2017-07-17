import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorComponent } from './busy-indicator.component';
import { BusyComponent } from './busy.component';

export { BusyComponent, BusyIndicatorComponent };

@NgModule({
  imports: [CommonModule],
  exports: [BusyComponent, BusyIndicatorComponent],
  declarations: [BusyComponent, BusyIndicatorComponent]
})
export class VCLBusyIndicatorModule { }
