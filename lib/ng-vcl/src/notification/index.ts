import { NgModule } from '@angular/core';
import {
  NotificationComponent,
  NotificationFooterDirective,
  NotificationHeaderDirective,
  NotificationTitleDirective,
} from './notification.component';
import { NotificationType, NOTIFICATION_TYPE_CLASS_MAP } from './types';

export {
  NotificationComponent,
  NotificationType,
  NOTIFICATION_TYPE_CLASS_MAP,
  NotificationTitleDirective,
  NotificationHeaderDirective,
  NotificationFooterDirective,
};

@NgModule({
  imports: [
    NotificationComponent,
    NotificationFooterDirective,
    NotificationHeaderDirective,
    NotificationTitleDirective,
  ],
  exports: [
    NotificationComponent,
    NotificationFooterDirective,
    NotificationHeaderDirective,
    NotificationTitleDirective,
  ],
})
export class VCLNotificationModule {}
