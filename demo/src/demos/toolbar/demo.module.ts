import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLToolbarModule, VCLButtonModule, VCLNavigationModule, VCLInputModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { ToolbarDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'Toolbar',
    tabs: {
      Demo: ToolbarDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/ng-vcl/toolbar/README.md')
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
    VCLToolbarModule,
    VCLButtonModule,
    VCLNavigationModule,
    VCLInputModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ ToolbarDemoComponent ],
  declarations: [ ToolbarDemoComponent ]
})
export class ToolbarDemoModule { }
