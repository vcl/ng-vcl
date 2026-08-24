import { NgModule } from '@angular/core';
import { VCLAlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { VCLAlertInputDirective } from './input-alert.directive';
import { AlertAlignment, AlertInput, AlertResult, AlertType } from './types';

export {
  AlertAlignment,
  VCLAlertComponent,
  VCLAlertInputDirective,
  AlertInput,
  AlertResult,
  AlertService,
  AlertType,
};

@NgModule({
  imports: [VCLAlertComponent, VCLAlertInputDirective],
  exports: [VCLAlertComponent, VCLAlertInputDirective],
  declarations: [],
  providers: [],
})
export class VCLAlertModule {}
