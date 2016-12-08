import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { VCLModule } from './../../../src/index';
import { DemoComponent } from './../demo/demo.component';
import { LayerComponent, LayerDemoCanDeactivateGuard } from './layer.component';

const PATH = 'layer';
const LABEL = 'Layer';

@NgModule({
  imports: [
    BrowserModule,
    VCLModule,
    RouterModule.forChild([{
      path: PATH,
      component: DemoComponent,
      data: {
        label: LABEL,
        tabs: {
          Demo: LayerComponent,
          'README.md': require("!raw-loader!../../../src/components/layer/README.md"),
          'demo.component.html': require("!raw-loader!./layer.component.html"),
          'demo.component.ts': require("!raw-loader!./layer.component.ts")
        },
      },
      canDeactivate: [LayerDemoCanDeactivateGuard],
    }]),
  ],
  providers: [
    LayerDemoCanDeactivateGuard
  ],
  declarations: [
    LayerComponent
  ]
})
export default class LayerDemoModule {
  static label = LABEL;
  static path = PATH;
  static category = 'Layer';
};
