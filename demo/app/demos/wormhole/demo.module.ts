import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { NgModule } from '@angular/core';
import { WormholeDemoComponent, MyComponent } from './demo.component';
import { VCLWormholeModule } from '@ng-vcl/ng-vcl';

export function demo() {
  return {
    label: 'Wormhole',
    tabs: {
      Demo: WormholeDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/wormhole/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      }
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLWormholeModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: { demo }
    }]),
  ],
  entryComponents: [
    WormholeDemoComponent,
    MyComponent
  ],
  declarations: [
    WormholeDemoComponent,
    MyComponent
  ]
})
export class WormholeDemoModule { }
