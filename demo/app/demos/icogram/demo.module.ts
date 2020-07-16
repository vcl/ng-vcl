
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLIcogramModule, VCLIconModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { IcogramDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/icogram/README.md';

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
        type: 'html',
        content: require('!raw-loader!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts')
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
