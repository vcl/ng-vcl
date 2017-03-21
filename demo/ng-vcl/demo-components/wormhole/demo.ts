import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DemoContainerComponent } from './../../components/demo-container/demo-container.component';
import { NgModule } from '@angular/core';
import { WormholeDemoComponent, MyComponent } from './demo.component';
import { VCLWormholeModule } from '@ng-vcl/ng-vcl';

const PATH = 'wormhole';
const LABEL = 'Wormhole';

@NgModule({
  imports: [
    BrowserModule,
    VCLWormholeModule,
    RouterModule.forChild([{
      path: PATH,
      component: DemoContainerComponent,
      data: {
        label: LABEL,
        tabs: {
          Demo: WormholeDemoComponent,
          'README.md': {
            type: 'md',
            content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../src/ng-vcl/wormhole/README.md")
          },
          'demo.component.html': {
            type: 'pre',
            content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
          },
          'demo.component.ts': {
            type: 'pre',
            content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
          }
        },
      },
    }]),
  ],
  entryComponents: [
    MyComponent
  ],
  declarations: [
    WormholeDemoComponent,
    MyComponent
  ]
})
export default class WormholeDemoModule {
  static label = LABEL;
  static path = PATH;
  static category = 'Other';
};
