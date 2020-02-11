import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLInputModule, VCLEmbeddedInputGroupModule, VCLIcogramModule, VCLIconModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { EmbeddedInputGroupDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/embedded-input-group/README.md';

export function demo() {
  return {
    label: 'Embedded Input Group',
    tabs: {
      Demo: EmbeddedInputGroupDemoComponent,
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
    VCLInputModule,
    VCLIcogramModule,
    VCLIconModule,
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