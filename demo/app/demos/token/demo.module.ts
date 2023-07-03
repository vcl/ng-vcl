import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VCLTokenModule, VCLInputModule } from '@vcl/ng-vcl';

import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { TokenDemoComponent } from './demo.component';

import README from '!raw-loader!@vcl/ng-vcl/token/README.md';

export function demo() {
  return {
    label: 'Token',
    tabs: {
      Demo: TokenDemoComponent,
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
    VCLTokenModule,
    VCLInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [TokenDemoComponent],
})
export class TokenDemoModule {}
