import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { BreakpointsDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/breakpoints/README.md';

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
        RouterModule.forChild([{
                path: '',
                component: DemoComponent,
                data: { demo }
            }]),
    ],
    declarations: [BreakpointsDemoComponent]
})
export class BreakpointsDemoModule { }
