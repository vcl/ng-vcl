import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './../../modules/demo/demo.module';
import { CalendarDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/calendar/README.md';

export function demo() {
  return {
    label: 'Calendar',
    tabs: {
      Demo: CalendarDemoComponent,
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
export class CalendarDemoModule {}
