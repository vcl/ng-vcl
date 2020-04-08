import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLEmbeddedInputGroupModule, VCLBusyIndicatorModule, VCLIconModule, VCLIcogramModule, VCLInputModule, VCLDataListModule } from '@vcl/ng-vcl';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { DataListDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/data-list/README.md';

export function demo() {
  return {
    label: 'Data List',
    tabs: {
      Demo: DataListDemoComponent,
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
    VCLEmbeddedInputGroupModule,
    VCLDataListModule,
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
  entryComponents: [ DataListDemoComponent ],
  declarations: [ DataListDemoComponent ]
})
export class DataListDemoModule { }
