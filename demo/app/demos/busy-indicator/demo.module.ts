import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLBusyIndicatorModule, VCLButtonModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { BusyDemoComponent } from './demo.component';
import { VCLIconModule } from '@ng-vcl/ng-vcl/icon';
import README from '@ng-vcl/ng-vcl/busy-indicator/README.md';

export function demo() {
  return {
    label: 'Busy Indicator',
    tabs: {
      Demo: BusyDemoComponent,
      'README.md': {
        type: 'md',
        content: README
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      },
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLButtonModule,
    VCLIconModule,
    VCLBusyIndicatorModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ BusyDemoComponent ],
  declarations: [ BusyDemoComponent ]
})
export class BusyDemoModule { }
