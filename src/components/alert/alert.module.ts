import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from './../icogram/icogram.module';
import { VCLButtonModule } from './../button/button.module';
import { VCLLayerModule } from './../layer/layer.module';
import { VCLInputModule } from './../input/input.module';
import { AlertComponent, AlertLayer } from './alert.component';
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
    VCLLayerModule.withConfig({
      layers: [ AlertLayer ]
    })
  ],
  exports: [],
  declarations: [ AlertComponent, AlertInputComponent ],
  entryComponents: [ AlertComponent ],
  providers: [ AlertService ],
})
export class VCLAlertModule { }
