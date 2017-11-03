import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from './../button/index';
import { VCLLayerModule } from './../layer/index';
import { VCLWormholeModule } from './../wormhole/index';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { NotificationOptions, NotificationPosition, NotificationType } from './types';
import { VCLNotificationContentComponent } from './notification-content.component';

export { Notification, NotificationService, NotificationOptions, NotificationType, NotificationPosition, NotificationComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLLayerModule.forChild(),
    VCLWormholeModule,
  ],
  exports: [],
  declarations: [ NotificationComponent, VCLNotificationContentComponent ],
  entryComponents: [ NotificationComponent ],
  providers: [
    NotificationService
  ],
})
export class VCLNotificationModule {

}
