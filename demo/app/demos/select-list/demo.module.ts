import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  VCLButtonModule,
  VCLBusyIndicatorModule,
  VCLIconModule,
  VCLIcogramModule,
  VCLInputModule,
  VCLSelectModule,
  VCLSelectListModule,
} from '@vcl/ng-vcl';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { SelectListDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/select-list/README.md';

export function demo() {
  return {
    label: 'Select List',
    tabs: {
      Demo: SelectListDemoComponent,
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
export class SelectListDemoModule {}
