import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VCLBusyIndicatorModule } from '../busy-indicator/index';
import { VCLIconModule } from '../icon/index';
import { VCLFormControlGroupModule } from '../radio-button/index';

import { VCLButtonModule } from './../button/index';
import { VCLIcogramModule } from './../icogram/index';
import { VCLInputModule } from './../input/index';
import { VCLLayerModule } from './../layer/index';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { AlertInputDirective } from './input-alert.directive';
import { AlertType, AlertInput, AlertAlignment, AlertResult } from './types';

export { AlertService, AlertType, AlertInput, AlertAlignment, AlertResult };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLFormControlGroupModule,
    VCLInputModule,
    VCLIcogramModule,
    VCLIconModule,
    VCLBusyIndicatorModule,
    VCLLayerModule,
  ],
  exports: [],
  declarations: [AlertComponent, AlertInputDirective],
  providers: [AlertService],
})
export class VCLAlertModule {}
