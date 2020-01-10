import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { BreakpointsDemoComponent } from './demo.component';
import README from '@ng-vcl/ng-vcl/breakpoints/README.md';

export function demo() {
  return {
    label: 'Breakpoints',
    tabs: {
      Demo: BreakpointsDemoComponent,
      'README.md': {
        type: 'md',
        content: README
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
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ BreakpointsDemoComponent ],
  declarations: [ BreakpointsDemoComponent ]
})
export class BreakpointsDemoModule { }
