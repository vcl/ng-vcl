import { NgModule } from '@angular/core';
import { AlertService } from './alert.service';
import { AlertType, AlertInput, AlertAlignment, AlertResult } from './types';

export { AlertService, AlertType, AlertInput, AlertAlignment, AlertResult };

@NgModule({
  imports: [],
  exports: [],
  providers: [AlertService],
})
export class VCLAlertModule {}
