import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { VCLNotificationModule } from '../notification/index';
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
import { NotifierHandlerService } from './notifier-handler.service';

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
  imports: [NotifierComponent, NotifierDirective],
  exports: [
    PortalModule,
    NotifierDirective,
    NotifierComponent,
    VCLNotificationModule,
  ],
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
