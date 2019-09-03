import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLMonthPickerLegacyModule, VCLButtonModule, VCLPopoverModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { MonthPickerDemoComponent } from './demo.component';
import {FormsModule} from '@angular/forms';
import README from '@ng-vcl/ng-vcl/month-picker/README.md';

export function demo() {
  return {
    label: 'Month Picker (deprecated)',
    tabs: {
      Demo: MonthPickerDemoComponent,
      'README.md': {
        type: 'md',
        content: README
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLButtonModule,
    VCLPopoverModule,
    VCLMonthPickerLegacyModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ MonthPickerDemoComponent ],
  declarations: [ MonthPickerDemoComponent ]
})
export class MonthPickerDemoModule { }
