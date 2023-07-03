import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VCLZoomBoxModule } from '@vcl/ng-vcl';

import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { ZoomBoxDemoComponent } from './demo.component';

import README from '!raw-loader!@vcl/ng-vcl/zoom-box/README.md';

export function demo() {
  return {
    label: 'Zoom Box',
    tabs: {
      Demo: ZoomBoxDemoComponent,
      'README.md': {
        type: 'md',
        content: README,
      },
      'demo.component.html': {
        type: 'html',
        content: require('!raw-loader!./demo.component.html'),
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts'),
      },
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLZoomBoxModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [ZoomBoxDemoComponent],
})
export class ZoomBoxDemoModule {}
