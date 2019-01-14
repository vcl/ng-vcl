import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from './../button/index';
import { VCLLayerModule } from './../layer/index';
import { VCLWormholeModule } from './../wormhole/index';
import { NotifierComponent } from './notifier.component';
import { NotifierService } from './notifier.service';
import { Notifier } from './notifier';
import { NotifierOptions, NotifierPosition, NotifierType } from './types';
import { VCLNotifierContentComponent } from './notifier-content.component';
import { VCLNotificationModule } from '../notification/index';

export { Notifier, NotifierService, NotifierOptions, NotifierType, NotifierPosition, NotifierComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLLayerModule.forChild(),
    VCLWormholeModule,
    VCLNotificationModule
  ],
  exports: [],
  declarations: [ NotifierComponent, VCLNotifierContentComponent ],
  entryComponents: [ NotifierComponent ],
  providers: [
    NotifierService
  ],
})
export class VCLNotifierModule {

}
