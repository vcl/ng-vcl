import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLDrawerModule, VCLButtonModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { DrawerDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'Drawer',
    tabs: {
      Demo: DrawerDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/drawer/README.md')
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
    VCLButtonModule,
    VCLDrawerModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ DrawerDemoComponent ],
  declarations: [ DrawerDemoComponent ]
})
export class DrawerDemoModule { }
