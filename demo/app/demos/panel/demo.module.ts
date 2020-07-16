import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VCLButtonModule, VCLPanelModule, VCLIconModule } from '@vcl/ng-vcl';
import { DemoComponent, DemoModule } from '../../modules/demo/demo.module';
import { PanelDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/panel/README.md';

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
        type: 'html',
        content: require('!raw-loader!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts')
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
