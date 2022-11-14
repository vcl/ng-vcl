import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  VCLButtonGroupModule,
  VCLButtonModule,
  VCLNotifierModule,
} from '@vcl/ng-vcl';
import { DemoComponent, DemoModule } from '../../modules/demo/demo.module';
import { NotifierDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/notifier/README.md';

export function demo() {
  return {
    label: 'Notifier',
    tabs: {
      Demo: NotifierDemoComponent,
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
    FormsModule,
    DemoModule,
    VCLNotifierModule,
    VCLButtonGroupModule,
    VCLButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [NotifierDemoComponent],
})
export class NotifierDemoModule {}
