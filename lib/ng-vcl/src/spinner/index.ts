import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLButtonGroupModule } from '../button-group';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';

import { SpinnerComponent } from './spinner.component';

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
