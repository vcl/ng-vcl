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
    VCLNotificationFooterDirective,
    VCLNotificationHeaderDirective,
    VCLNotificationTitleDirective,
  ],
  exports: [
    VCLNotificationComponent,
    VCLNotificationFooterDirective,
    VCLNotificationHeaderDirective,
    VCLNotificationTitleDirective,
  ],
})
export class VCLNotificationModule {}
