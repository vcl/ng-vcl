import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorComponent } from './busy-indicator.component';
import { BusyComponent } from './busy.component';

@NgModule({
  imports: [CommonModule],
  exports: [BusyComponent, BusyIndicatorComponent],
  declarations: [BusyComponent, BusyIndicatorComponent]
})
export class VCLBusyIndicatorModule { }
