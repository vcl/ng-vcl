import {
  VCLNotificationComponent,
  VCLNotificationTitleDirective,
} from '@vcl/ng-vcl';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLNotificationComponent, VCLNotificationTitleDirective],
})
export class NotificationDemoComponent {}
