import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './../../modules/demo/demo.module';
import { FormControlGroupDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/form-control-group/README.md';

export function demo() {
  return {
    label: 'Form Control Group',
    tabs: {
      Demo: FormControlGroupDemoComponent,
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
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
})
export class FormControlGroupDemoModule {}
