import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './../demo/demo.component';
import { NgModule } from '@angular/core';
import { WormholeComponent, MyComponent } from './wormhole.component';
import { VCLWormholeModule } from '@ng-vcl/ng-vcl';


const PATH = 'wormhole';
const LABEL = 'Wormhole';

@NgModule({
  imports: [
    BrowserModule,
    VCLWormholeModule,
    RouterModule.forChild([{
      path: PATH,
      component: DemoComponent,
      data: {
        label: LABEL,
        tabs: {
          Demo: WormholeComponent,
          'README.md': require("!raw-loader!../../../src/directives/wormhole/README.md"),
          'demo.component.html': require("!raw-loader!./wormhole.component.html"),
          'demo.component.ts': require("!raw-loader!./wormhole.component.ts")
        },
      },
    }]),
  ],
  entryComponents: [
    MyComponent
  ],
  declarations: [
    WormholeComponent,
    MyComponent
  ]
})
export default class LayerDemoModule {
  static label = LABEL;
  static path = PATH;
  static category = 'Other';
};
