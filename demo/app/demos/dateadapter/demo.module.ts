import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLCalendarModule, VCLButtonModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';

export function demo() {
  return {
    label: 'VCLDateAdapter',
    tabs: {
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!./README.md')
      }
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLButtonModule,
    VCLCalendarModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [  ],
  declarations: [ ]
})
export class DateadapterDemoModule { }
