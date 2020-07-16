import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLDrawerModule, VCLButtonModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { DrawerDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/drawer/README.md';

export function demo() {
  return {
    label: 'Drawer',
    tabs: {
      Demo: DrawerDemoComponent,
      'README.md': {
        type: 'md',
        content: README
      },
      'demo.component.html': {
        type: 'html',
        content: require('!raw-loader!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts')
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
