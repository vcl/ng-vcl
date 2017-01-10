import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { VCLLayerModule, VCLButtonModule, VCLWormholeModule } from './../../../src/index';
import { DemoComponent } from './../demo/demo.component';
import { LayerDemoComponent } from './demo.component';
import { SomeLayer, SomeComponent } from './some.component';
import { LayerDemoCanDeactivateGuard } from './demo.guard';

const PATH = 'layer';
const LABEL = 'Layer';

@NgModule({
  imports: [
    BrowserModule,
    VCLLayerModule.withConfig({
      layers: [SomeLayer]
    }),
    VCLWormholeModule,
    VCLButtonModule,
    RouterModule.forChild([{
      path: PATH,
      component: DemoComponent,
      data: {
        label: LABEL,
        tabs: {
          Demo: LayerDemoComponent,
          'README.md': {
            type: 'md',
            content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../src/components/layer/README.md")
          },
          'demo.component.html': {
            type: 'pre',
            content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
          },
          'demo.component.ts': {
            type: 'pre',
            content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
          },
          'demo.guard.ts': {
            type: 'pre',
            content: require("!highlight-loader?raw=true&lang=ts!./demo.guard.ts")
          },
          'some.component.html': {
            type: 'pre',
            content: require("!highlight-loader?raw=true&lang=html!./some.component.html")
          },
          'some.component.ts': {
            type: 'pre',
            content: require("!highlight-loader?raw=true&lang=ts!./some.component.ts")
          },
        },
      },
      canDeactivate: [LayerDemoCanDeactivateGuard],
    }]),
  ],
  providers: [
    LayerDemoCanDeactivateGuard,
  ],
  entryComponents: [
    SomeComponent
  ],
  declarations: [
    LayerDemoComponent,
    SomeComponent
  ]
})
export default class LayerDemoModule {
  static label = LABEL;
  static path = PATH;
  static category = 'Layer';
};
