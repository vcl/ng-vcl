import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLNotificationModule } from '@ng-vcl/ng-vcl';
import { VCLJssFormModule } from '@ng-vcl/jss-form';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { JssFormDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'JSS-Form',
    tabs: {
      Demo: JssFormDemoComponent,
      'README.md': {
        type: 'md',
        content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/jss-form/README.md")
      },
      'demo.component.html': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
      },
      'demo.component.ts': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
      },
      'hero.ts': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=ts!./hero.ts")
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLNotificationModule,
    VCLJssFormModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ JssFormDemoComponent ],
  declarations: [ JssFormDemoComponent ]
})
export class VCLJssFormDemoModule { }
