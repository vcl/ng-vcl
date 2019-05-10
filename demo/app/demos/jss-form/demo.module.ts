import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLJssFormModule, VCLNotifierModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { JssFormDemoComponent } from './demo.component';
import {CustomSampleComponent} from './custom-sample.component';

export function demo() {
  return {
    label: 'JSS-Form',
    tabs: {
      Demo: JssFormDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/jss-form/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      },
      'custom-sample.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./custom-sample.component.ts')
      },
      'hero.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./hero.ts')
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLJssFormModule,
    VCLNotifierModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ JssFormDemoComponent, CustomSampleComponent ],
  declarations: [ JssFormDemoComponent, CustomSampleComponent ]
})
export class VCLJssFormDemoModule { }
