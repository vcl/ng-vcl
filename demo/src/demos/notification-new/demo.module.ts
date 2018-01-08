import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VCLNotificationNewModule} from '@ng-vcl/ng-vcl';
import {DemoModule, DemoComponent} from './../../modules/demo/demo.module';
import {NotificationNewDemoComponent} from './demo.component';

export function demo() {
  return {
    label: 'Busy',
    tabs: {
      Demo: NotificationNewDemoComponent,
      'README.md': {
        type: 'md',
        content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/ng-vcl/zoom-box/README.md")
      },
      'demo.component.html': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
      },
      'demo.component.ts': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
      },
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLNotificationNewModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [NotificationNewDemoComponent],
  declarations: [NotificationNewDemoComponent]
})
export class NotificationNewDemoModule {
}
