import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VCLButtonModule, VCLPanelModule, VCLIconModule } from '@vcl/ng-vcl';
import { DemoComponent, DemoModule } from '../../modules/demo/demo.module';
import { PanelDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/panel/README.md';

export function demo() {
  return {
    label: 'Panel',
    tabs: {
      Demo: PanelDemoComponent,
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
    VCLPanelModule,
    VCLButtonModule,
    VCLIconModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ PanelDemoComponent ],
  declarations: [ PanelDemoComponent ]
})
export class PanelDemoModule { }
