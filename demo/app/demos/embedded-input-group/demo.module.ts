import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLInputControlGroupModule, VCLButtonModule, VCLInputModule, VCLEmbeddedInputGroupModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { EmbeddedInputGroupDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'Embedded Input Group',
    tabs: {
      Demo: EmbeddedInputGroupDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/embedded-input-group/README.md')
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
    VCLInputControlGroupModule,
    VCLInputModule,
    VCLButtonModule,
    VCLEmbeddedInputGroupModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ EmbeddedInputGroupDemoComponent ],
  declarations: [ EmbeddedInputGroupDemoComponent ]
})
export class EmbeddedInputGroupDemoModule { }
