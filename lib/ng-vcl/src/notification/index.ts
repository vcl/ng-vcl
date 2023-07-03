import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';

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
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLIconModule,
    OverlayModule,
    PortalModule,
  ],
  exports: [
    PortalModule,
    NotificationComponent,
    NotificationFooterDirective,
    NotificationHeaderDirective,
    NotificationTitleDirective,
  ],
  declarations: [
    NotificationComponent,
    NotificationFooterDirective,
    NotificationHeaderDirective,
    NotificationTitleDirective,
  ],
})
export class VCLNotificationModule {}
