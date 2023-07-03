import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';
import { VCLNotificationModule } from '../notification/index';

import { NotifierHandlerService } from './notifier-handler.service';
import { NotifierComponent } from './notifier.component';
import { NotifierDirective } from './notifier.directive';
import { NotifierService } from './notifier.service';
import {
  NotifierOptions,
  NotifierPosition,
  NOTIFIER_CONFIG_DEFAULTS,
  NOTIFIER_CONFIG_TOKEN,
  NOTIFIER_ANIMATION_PARAMS_DEFAULTS,
  NOTIFIER_ANIMATION_PARAMS_TOKEN,
  NotifierConfig,
  NotificationAnimationParams,
} from './types';

export {
  NotifierComponent,
  NotifierService,
  NotifierOptions,
  NotifierPosition,
  NOTIFIER_CONFIG_TOKEN,
  NotifierConfig,
  NOTIFIER_ANIMATION_PARAMS_TOKEN,
  NotificationAnimationParams,
  NotifierDirective,
};

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLIconModule,
    VCLNotificationModule,
    OverlayModule,
    PortalModule,
  ],
  exports: [
    PortalModule,
    NotifierDirective,
    NotifierComponent,
    VCLNotificationModule,
  ],
  declarations: [NotifierComponent, NotifierDirective],
  providers: [
    NotifierService,
    NotifierHandlerService,
    {
      provide: NOTIFIER_CONFIG_TOKEN,
      useValue: NOTIFIER_CONFIG_DEFAULTS,
    },
    {
      provide: NOTIFIER_ANIMATION_PARAMS_TOKEN,
      useValue: NOTIFIER_ANIMATION_PARAMS_DEFAULTS,
    },
  ],
})
export class VCLNotifierModule {}
