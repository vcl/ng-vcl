import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from './../icogram/index';
import { VCLButtonModule } from './../button/index';
import { VCLLayerModule } from './../layer/index';
import { VCLInputModule } from './../input/index';
import { AlertComponent } from './alert.component';
import { AlertInputComponent } from './alert-input.component';
import { AlertService } from './alert.service';
import { AlertType, AlertError, AlertInput, AlertAlignment } from './types';

export { AlertService, AlertType, AlertInput, AlertError, AlertAlignment };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    VCLButtonModule,
    VCLInputModule,
    VCLIcogramModule,
    VCLLayerModule.forChild({layers: []})
  ],
  exports: [],
  declarations: [ AlertComponent, AlertInputComponent ],
  entryComponents: [ AlertComponent ],
  providers: [ AlertService ],
})
export class VCLAlertModule { }
