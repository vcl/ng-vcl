import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VCLNotificationModule, VCLButtonModule} from '@ng-vcl/ng-vcl';
import {DemoModule, DemoComponent} from './../../modules/demo/demo.module';
import {NotificationDemoComponent} from './demo.component';

export function demo() {
  return {
    label: 'Notifier',
    tabs: {
      Demo: NotificationDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/notification/README.md')
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
    VCLNotificationModule,
    VCLButtonModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [NotificationDemoComponent],
  declarations: [NotificationDemoComponent]
})
export class NotificationDemoModule {
}
