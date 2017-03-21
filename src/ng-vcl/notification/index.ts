import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from './../icogram/index';
import { VCLButtonModule } from './../button/index';
import { VCLLayerModule, provideLayer } from './../layer/index';
import { VCLInputModule } from './../input/index';
import { NotificationComponent } from './notification.component';
import { NotificationLayerTopRight, NotificationLayerBottomRight, NotificationLayerBottom, NotificationLayerBottomLeft, NotificationLayerTopLeft, NotificationLayerTop } from './notification.layer';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { NotificationOptions, NotificationType, NotificationPosition } from './types';

export { Notification, NotificationService, NotificationOptions, NotificationType, NotificationPosition, NotificationComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLLayerModule
  ],
  exports: [],
  declarations: [ NotificationComponent ],
  entryComponents: [ NotificationComponent ],
  providers: [
    NotificationService,
    provideLayer(NotificationLayerTopRight),
    provideLayer(NotificationLayerBottomRight),
    provideLayer(NotificationLayerBottom),
    provideLayer(NotificationLayerBottomLeft),
    provideLayer(NotificationLayerTopLeft),
    provideLayer(NotificationLayerTop)
  ],
})
export class VCLNotificationModule { }
