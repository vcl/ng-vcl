import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyComponent } from './plotly.component';

@NgModule({
  imports: [CommonModule],
  exports: [PlotlyComponent],
  declarations: [PlotlyComponent],
  providers: [],
})
export class VCLPlotlyModule { }
