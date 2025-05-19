import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './../../modules/demo/demo.module';
import { ToolTipDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/tooltip/README.md';

export function demo() {
  return {
    label: 'Tooltip',
    tabs: {
      Demo: ToolTipDemoComponent,
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
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
})
export class ToolTipDemoModule {}
