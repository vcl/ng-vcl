import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLIcogramModule, VCLIconModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { ButtonDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/button/README.md';

export function demo() {
  return {
    label: 'Button',
    tabs: {
      Demo: ButtonDemoComponent,
      'README.md': {
        type: 'md',
        content: README,
      },
      'demo.component.html': {
        type: 'html',
        content: require('!raw-loader!./demo.component.html'),
      },
      'demo.component.scss': {
        type: 'scss',
        content: require('raw-loader!./demo.component.scss'),
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
    VCLButtonModule,
    VCLIconModule,
    VCLIcogramModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [ButtonDemoComponent],
})
export class ButtonDemoModule {}
