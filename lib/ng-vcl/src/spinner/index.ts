import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import { SpinnerComponent } from './spinner.component';
import { VCLButtonGroupModule } from '../button-group';

export { SpinnerComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonGroupModule,
  ],
  exports: [
    SpinnerComponent,
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonGroupModule,
  ],
  declarations: [SpinnerComponent],
  providers: [],
})
export class VCLSpinnerModule {}
