import {
  VCLNotificationComponent,
  VCLNotificationTitleDirective,
} from '@vcl/ng-vcl';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLNotificationComponent, VCLNotificationTitleDirective],
})
export class NotificationDemoComponent {}
