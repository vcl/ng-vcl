import { NgModule } from '@angular/core';
import {
  VCLNotificationComponent,
  VCLNotificationFooterDirective,
  VCLNotificationHeaderDirective,
  VCLNotificationTitleDirective,
} from './notification.component';
import { NotificationType, NOTIFICATION_TYPE_CLASS_MAP } from './types';

export {
  VCLNotificationComponent,
  NotificationType,
  NOTIFICATION_TYPE_CLASS_MAP,
  VCLNotificationTitleDirective,
  VCLNotificationHeaderDirective,
  VCLNotificationFooterDirective,
};

@NgModule({
  imports: [
    VCLNotificationComponent,
    VCLNotificationTitleDirective,
    VCLNotificationHeaderDirective,
    VCLNotificationFooterDirective,
  ],
  exports: [
    VCLNotificationComponent,
    VCLNotificationTitleDirective,
    VCLNotificationHeaderDirective,
    VCLNotificationFooterDirective,
  ],
})
export class VCLNotificationModule {}
