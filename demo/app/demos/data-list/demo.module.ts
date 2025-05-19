import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './../../modules/demo/demo.module';
import { DataListDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/data-list/README.md';

export function demo() {
  return {
    label: 'Data List',
    tabs: {
      Demo: DataListDemoComponent,
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
      'data-list-add-remove-demo.component.html': {
        type: 'html',
        content: require('!raw-loader!./list-add-remove/data-list-add-remove-demo.component.html'),
      },
      'data-list-add-remove-demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./list-add-remove/data-list-add-remove-demo.component.ts'),
      },
      'create-kitten.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./list-add-remove/create-kitten.component.ts'),
      },
      'data.ts': {
        type: 'ts',
        content: require('!raw-loader!./list-add-remove/data.ts'),
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
export class DataListDemoModule {}
