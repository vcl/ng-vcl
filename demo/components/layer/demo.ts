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
          'README.md': require("!raw-loader!../../../src/components/layer/README.md"),
          'demo.component.html': require("!raw-loader!./demo.component.html"),
          'demo.component.ts': require("!raw-loader!./demo.component.ts"),
          'demo.guard': require("!raw-loader!./demo.guard"),
          'some.component.html': require("!raw-loader!./some.component.html"),
          'some.component.ts': require("!raw-loader!./some.component.ts")
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
