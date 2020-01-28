
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLIcogramModule, VCLIconModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { IcogramDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/icogram/README.md';

export function demo() {
  return {
    label: 'Icogram',
    tabs: {
      Demo: IcogramDemoComponent,
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
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLIcogramModule,
    VCLIconModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: { demo }
    }]),
  ],
  entryComponents: [ IcogramDemoComponent ],
  declarations: [ IcogramDemoComponent ]
})
export class IcogramDemoModule { }
