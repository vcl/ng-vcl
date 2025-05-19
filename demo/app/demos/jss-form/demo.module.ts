import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormFieldControl } from '@vcl/ng-vcl';
import { DemoComponent } from './../../modules/demo/demo.module';
import { JssFormDemoComponent } from './demo.component';
import { FormFieldCounterComponent } from './jss-form-extended';

import README from '!raw-loader!@vcl/ng-vcl/jss-form/README.md';

// Register counter component as field
FormFieldControl.register('counter', FormFieldCounterComponent);

export function demo() {
  return {
    label: 'JSS-Form',
    tabs: {
      Demo: JssFormDemoComponent,
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
      'jss-form-extended.ts': {
        type: 'ts',
        content: require('!raw-loader!./jss-form-extended.ts'),
      },
      'hero.ts': {
        type: 'ts',
        content: require('!raw-loader!./hero.ts'),
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
export class VCLJssFormDemoModule {}
