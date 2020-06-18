import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VCLButtonGroupModule, VCLButtonModule, VCLNotificationModule } from '@vcl/ng-vcl';
import { DemoComponent, DemoModule } from '../../modules/demo/demo.module';
import { NotificationDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/notification/README.md';

export function demo() {
  return {
    label: 'Notification',
    tabs: {
      Demo: NotificationDemoComponent,
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
    VCLNotificationModule,
    VCLButtonGroupModule,
    VCLButtonModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ NotificationDemoComponent ],
  declarations: [ NotificationDemoComponent ]
})
export class NotificationDemoModule { }
