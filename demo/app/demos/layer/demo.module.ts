import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VCLLayerModule, VCLButtonModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { LayerDemoComponent } from './demo.component';
import { ExampleComponent, ExampleLayerProvider } from './example.component';

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
      'example.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./example.component.html')
      },
      'example.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./example.component.ts')
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
    ExampleLayerProvider
  ],
  entryComponents: [
    LayerDemoComponent,
    ExampleComponent
  ],
  declarations: [
    LayerDemoComponent,
    ExampleComponent
  ]
})
export class LayerDemoModule { }

