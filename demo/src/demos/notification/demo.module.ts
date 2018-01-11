import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VCLButtonGroupModule, VCLButtonModule, VCLNotificationModule } from '@ng-vcl/ng-vcl';
import { DemoComponent, DemoModule } from './../../modules/demo/demo.module';
import { NotificationContentComponent, NotificationDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'Notifications',
    tabs: {
      Demo: NotificationDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/ng-vcl/notification/README.md')
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
    VCLNotificationModule,
    VCLButtonGroupModule,
    VCLButtonModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ NotificationDemoComponent, NotificationContentComponent ],
  declarations: [ NotificationDemoComponent, NotificationContentComponent ]
})
export class NotificationDemoModule { }
