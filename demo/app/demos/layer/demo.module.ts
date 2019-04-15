import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VCLLayerModule, VCLButtonModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { LayerDemoComponent } from './demo.component';
import { FooLayer, FooComponent } from './foo.component';
import { BarComponent } from './bar.component';

export function demo() {
  return {
    label: 'Layer',
    tabs: {
      Demo: LayerDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/layer/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      },
      'foo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./foo.component.html')
      },
      'foo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./foo.component.ts')
      },
      'bar.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./bar.component.html')
      },
      'bar.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./bar.component.ts')
      }
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLLayerModule,
    VCLButtonModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo},
    }]),
  ],
  providers: [
    FooLayer
  ],
  entryComponents: [
    LayerDemoComponent,
    BarComponent,
    FooComponent
  ],
  declarations: [
    LayerDemoComponent,
    BarComponent,
    FooComponent
  ]
})
export class LayerDemoModule { }

