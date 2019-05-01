import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { VCLButtonModule } from './../button';
import { VCLIconModule } from '../icon';
import { NotificationComponent } from './notification.component';
import { NotifierService } from './notifier.service';
import { NotifierOptions, NotifierPosition, NotifierType,
  NOTIFICATION_CONFIG_DEFAULTS, NOTIFICATION_CONFIG_TOKEN, NOTIFICATION_ANIMATION_PARAMS_TOKEN, NOTIFICATION_ANIMATION_PARAMS_DEFAULTS, NotificationConfig, NotificationAnimationParams } from './types';
import { NotificationsHandlerService } from './notifications-handler.service';

export { NotificationComponent, NotifierService, NotifierOptions, NotifierType, NotifierPosition, NOTIFICATION_CONFIG_TOKEN, NotificationConfig, NOTIFICATION_ANIMATION_PARAMS_TOKEN, NotificationAnimationParams };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLIconModule,
    OverlayModule
  ],
  exports: [],
  declarations: [ NotificationComponent ],
  entryComponents: [ NotificationComponent ],
  providers: [
    NotifierService,
    NotificationsHandlerService,
    {
      provide: NOTIFICATION_CONFIG_TOKEN,
      useValue: NOTIFICATION_CONFIG_DEFAULTS
    },
    {
      provide: NOTIFICATION_ANIMATION_PARAMS_TOKEN,
      useValue: NOTIFICATION_ANIMATION_PARAMS_DEFAULTS
    }
  ],
})
export class VCLNotifierModule {

}
