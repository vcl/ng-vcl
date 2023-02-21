import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLCalendarModule, VCLButtonModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import README from '!raw-loader!@vcl/ng-vcl/dateadapter/README.md';

export function demo() {
  return {
    label: 'Date Adapter',
    tabs: {
      'README.md': {
        type: 'md',
        content: README,
      },
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLButtonModule,
    VCLCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [],
})
export class DateadapterDemoModule {}
