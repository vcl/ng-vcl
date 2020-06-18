import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLBusyIndicatorModule, VCLIconModule, VCLIcogramModule, VCLInputModule, VCLSelectModule } from '@vcl/ng-vcl';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { SelectListDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/select-list/README.md';

export function demo() {
  return {
    label: 'Select List',
    tabs: {
      Demo: SelectListDemoComponent,
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
    FormsModule,
    DemoModule,
    VCLButtonModule,
    VCLSelectModule,
    VCLIconModule,
    VCLInputModule,
    VCLIcogramModule,
    VCLBusyIndicatorModule,
    ScrollingModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ SelectListDemoComponent ],
  declarations: [ SelectListDemoComponent ]
})
export class SelectListDemoModule { }
