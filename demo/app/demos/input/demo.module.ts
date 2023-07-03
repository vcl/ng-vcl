import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VCLInputModule, VCLIconModule, VCLButtonModule } from '@vcl/ng-vcl';

import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { InputDemoComponent } from './demo.component';

import README from '!raw-loader!@vcl/ng-vcl/input/README.md';

export function demo() {
  return {
    label: 'Input',
    tabs: {
      Demo: InputDemoComponent,
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
    VCLInputModule,
    VCLIconModule,
    VCLButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [InputDemoComponent],
})
export class InputDemoModule {}
