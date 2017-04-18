import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { VCLLayerModule, VCLButtonModule, VCLWormholeModule } from '@ng-vcl/ng-vcl';
import { DemoContainerComponent } from './../../components/demo-container/demo-container.component';
import { LayerDemoComponent } from './demo.component';
import { FooLayer, FooComponent } from './foo.layer';
import { LayerDemoCanDeactivateGuard } from './demo.guard';

const PATH = 'layer';
const LABEL = 'Layer';

@NgModule({
  imports: [
    BrowserModule,
    VCLLayerModule.withLayers([FooLayer]),
    VCLWormholeModule,
    VCLButtonModule,
    RouterModule.forChild([{
      path: PATH,
      component: DemoContainerComponent,
      data: {
        label: LABEL,
        tabs: {
          Demo: LayerDemoComponent,
          'README.md': {
            type: 'md',
            content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../src/ng-vcl/layer/README.md")
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
          'foo.layer.html': {
            type: 'pre',
            content: require("!highlight-loader?raw=true&lang=html!./foo.layer.html")
          },
          'foo.layer.ts': {
            type: 'pre',
            content: require("!highlight-loader?raw=true&lang=ts!./foo.layer.ts")
          }
        },
      },
      canDeactivate: [LayerDemoCanDeactivateGuard],
    }]),
  ],
  providers: [
    LayerDemoCanDeactivateGuard
  ],
  entryComponents: [
    FooComponent
  ],
  declarations: [
    LayerDemoComponent,
    FooComponent
  ]
})
export default class LayerDemoModule {
  static label = LABEL;
  static path = PATH;
  static category = 'Layer';
};
