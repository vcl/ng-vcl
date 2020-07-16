import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLBusyIndicatorModule, VCLButtonModule, VCLIconModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { BusyDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/busy-indicator/README.md';

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
        type: 'html',
        content: require('!raw-loader!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts')
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
