import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VCLButtonModule} from '../button/index';
import {NotificationComponent} from './notification.component';
import {NotificationHeaderComponent} from './notification-header.component';
import {NotificationBodyComponent} from './notification-body.component';
import {NotificationFooterComponent} from './notification-footer.component';

export * from './types';

@NgModule({
  imports: [CommonModule, VCLButtonModule],
  exports: [NotificationComponent, NotificationHeaderComponent, NotificationBodyComponent, NotificationFooterComponent],
  declarations: [NotificationComponent, NotificationHeaderComponent, NotificationBodyComponent, NotificationFooterComponent]
})
export class VCLNotificationModule {
}
