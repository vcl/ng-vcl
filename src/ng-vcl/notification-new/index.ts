import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NotificationNewComponent} from './notification-new.component';

export * from './types';

@NgModule({
  imports: [CommonModule],
  exports: [NotificationNewComponent],
  declarations: [NotificationNewComponent]
})
export class VCLNotificationNewModule {
}
