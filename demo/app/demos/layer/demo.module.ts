import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VCLLayerModule, VCLButtonModule, VCLIconModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { LayerDemoComponent } from './demo.component';
import { NagComponent, NagLayer } from './nag.component';
import { BarComponent } from './bar.component';
import README from '@vcl/ng-vcl/layer/README.md';

export function demo() {
  return {
    label: 'Layer',
    tabs: {
      Demo: LayerDemoComponent,
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
      'nag.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./nag.component.html')
      },
      'nag.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./nag.component.ts')
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
    VCLIconModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo},
    }]),
  ],
  entryComponents: [
    LayerDemoComponent,
    BarComponent,
    NagComponent
  ],
  declarations: [
    LayerDemoComponent,
    BarComponent,
    NagComponent
  ],
  providers: [
    NagLayer
  ]
})
export class LayerDemoModule { }

