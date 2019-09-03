import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VCLButtonGroupModule, VCLButtonModule, VCLNotifierModule } from '@ng-vcl/ng-vcl';
import { DemoComponent, DemoModule } from './../../modules/demo/demo.module';
import { NotifierDemoComponent } from './demo.component';
import README from '@ng-vcl/ng-vcl/notifier/README.md';

export function demo() {
  return {
    label: 'Notifiers',
    tabs: {
      Demo: NotifierDemoComponent,
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
    VCLNotifierModule,
    VCLButtonGroupModule,
    VCLButtonModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ NotifierDemoComponent ],
  declarations: [ NotifierDemoComponent ]
})
export class NotifierDemoModule { }
