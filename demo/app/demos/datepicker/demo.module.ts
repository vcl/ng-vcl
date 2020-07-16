import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLDatepickerModule, VCLButtonModule, VCLFormControlGroupModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { DatePickerDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/datepicker/README.md';
import { FormsModule } from '@angular/forms';

export function demo() {
  return {
    label: 'Datepicker',
    tabs: {
      Demo: DatePickerDemoComponent,
      'README.md': {
        type: 'md',
        content: README
      },
      'demo.component.html': {
        type: 'html',
        content: require('!raw-loader!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts')
      }
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLButtonModule,
    VCLFormControlGroupModule,
    VCLDatepickerModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ DatePickerDemoComponent ],
  declarations: [ DatePickerDemoComponent ]
})
export class DatepickerDemoModule { }
