import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { NgModule } from '@angular/core';
import { TableDemoComponent } from './demo.component';
// import { VCLTableModule } from '@ng-vcl/ng-vcl';

export function demo() {
  return {
    label: 'Table',
    tabs: {
      Demo: TableDemoComponent,
      'demo.component.html': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
      },
      'demo.component.ts': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
      }
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    // VCLTableModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: { demo }
    }]),
  ],
  entryComponents: [
    TableDemoComponent,
  ],
  declarations: [
    TableDemoComponent,
  ]
})
export class TableDemoModule { }
