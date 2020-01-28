import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLCheckboxModule, VCLFormControlGroupModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { CheckboxDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/checkbox/README.md';

export function demo() {
  return {
    label: 'Checkbox',
    tabs: {
      Demo: CheckboxDemoComponent,
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
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLCheckboxModule,
    VCLFormControlGroupModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ CheckboxDemoComponent ],
  declarations: [ CheckboxDemoComponent ]
})
export class CheckboxDemoModule { }
