import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLPlotlyModule } from '@ng-vcl/plotly';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { PlotlyDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'Select',
    tabs: {
      Demo: PlotlyDemoComponent,
      'README.md': {
        type: 'md',
        content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/plotly/README.md")
      },
      'demo.component.html': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
      },
      'demo.component.ts': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLPlotlyModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ PlotlyDemoComponent ],
  declarations: [ PlotlyDemoComponent ]
})
export class PlotlyDemoModule { }
