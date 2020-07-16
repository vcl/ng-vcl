import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLBadgeModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { BadgeDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/badge/README.md';

export function demo() {
  return {
    label: 'Badge',
    tabs: {
      Demo: BadgeDemoComponent,
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
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLBadgeModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ BadgeDemoComponent ],
  declarations: [ BadgeDemoComponent ]
})
export class BadgeDemoModule { }
