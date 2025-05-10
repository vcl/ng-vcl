import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

export { SpinnerComponent };

@NgModule({
  imports: [SpinnerComponent],
  exports: [SpinnerComponent],
})
export class VCLSpinnerModule {}
