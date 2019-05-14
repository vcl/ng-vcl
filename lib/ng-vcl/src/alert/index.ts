import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from './../icogram/index';
import { VCLButtonModule } from './../button/index';
import { VCLLayerModule } from './../layer/index';
import { VCLInputModule } from './../input/index';
import { VCLIconModule } from '../icon/index';
import { VCLBusyIndicatorModule } from '../busy-indicator/index';
import { AlertComponent } from './alert.component';
import { AlertInputDirective } from './input-alert.directive';
import { AlertService } from './alert.service';
import { AlertType, AlertInput, AlertAlignment, AlertResult } from './types';

export { AlertService, AlertType, AlertInput, AlertAlignment, AlertResult };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLInputModule,
    VCLIcogramModule,
    VCLIconModule,
    VCLBusyIndicatorModule,
    VCLLayerModule
  ],
  exports: [],
  declarations: [ AlertComponent, AlertInputDirective ],
  entryComponents: [ AlertComponent ],
  providers: [ AlertService ],
})
export class VCLAlertModule { }
