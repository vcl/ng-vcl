import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VCLButtonGroupModule, VCLButtonModule, VCLNotificationModule } from '@vcl/ng-vcl';
import { DemoComponent, DemoModule } from '../../modules/demo/demo.module';
import { NotificationDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/notification/README.md';

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
        VCLNotificationModule,
        VCLButtonGroupModule,
        VCLButtonModule,
        RouterModule.forChild([{
                path: '',
                component: DemoComponent,
                data: { demo }
            }]),
    ],
    declarations: [NotificationDemoComponent]
})
export class NotificationDemoModule { }
