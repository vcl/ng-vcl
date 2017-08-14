import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from './../icogram/index';
import { VCLButtonModule } from './../button/index';
import { VCLLayerModule, LAYERS } from './../layer/index';
import { VCLInputModule } from './../input/index';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { NotificationOptions, NotificationType, NotificationPosition } from './types';

export { Notification, NotificationService, NotificationOptions, NotificationType, NotificationPosition, NotificationComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLLayerModule.forChild()
  ],
  exports: [],
  declarations: [ NotificationComponent ],
  entryComponents: [ NotificationComponent ],
  providers: [
    NotificationService
  ],
})
export class VCLNotificationModule {

}
