import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VCLButtonModule} from "../button";
import {NotificationNewComponent} from './notification-new.component';
import {NotificationNewHeaderComponent} from "./notification-new-header.component";
import {NotificationNewBodyComponent} from "./notification-new-body.component";
import {NotificationNewFooterComponent} from "./notification-new-footer.component";

export * from './types';

@NgModule({
  imports: [CommonModule, VCLButtonModule],
  exports: [NotificationNewComponent, NotificationNewHeaderComponent, NotificationNewBodyComponent, NotificationNewFooterComponent],
  declarations: [NotificationNewComponent, NotificationNewHeaderComponent, NotificationNewBodyComponent, NotificationNewFooterComponent]
})
export class VCLNotificationNewModule {
}
