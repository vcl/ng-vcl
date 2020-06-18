import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';
import { VCLNotificationModule } from '../notification/index';
import { NotifierComponent } from './notifier.component';
import { NotifierDirective } from './notifier.directive';
import { NotifierService } from './notifier.service';
import { NotifierOptions, NotifierPosition,
  NOTIFIER_CONFIG_DEFAULTS, NOTIFIER_CONFIG_TOKEN, NOTIFIER_ANIMATION_PARAMS_DEFAULTS, NOTIFIER_ANIMATION_PARAMS_TOKEN, NotifierConfig, NotificationAnimationParams } from './types';
import { NotifierHandlerService } from './notifier-handler.service';

export { NotifierComponent, NotifierService, NotifierOptions, NotifierPosition, NOTIFIER_CONFIG_TOKEN, NotifierConfig, NOTIFIER_ANIMATION_PARAMS_TOKEN, NotificationAnimationParams };

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
  exports: [PortalModule, NotifierDirective, NotifierComponent, VCLNotificationModule],
  declarations: [ NotifierComponent, NotifierDirective ],
  entryComponents: [ NotifierComponent ],
  providers: [
    NotifierService,
    NotifierHandlerService,
    {
      provide: NOTIFIER_CONFIG_TOKEN,
      useValue: NOTIFIER_CONFIG_DEFAULTS
    },
    {
      provide: NOTIFIER_ANIMATION_PARAMS_TOKEN,
      useValue: NOTIFIER_ANIMATION_PARAMS_DEFAULTS
    }
  ],
})
export class VCLNotifierModule {

}
