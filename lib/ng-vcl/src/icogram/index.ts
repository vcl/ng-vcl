import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { IcogramComponent, IcogramLinkComponent } from './icogram.component';

export { IcogramComponent, IcogramLinkComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLIconModule,
    IcogramComponent,
    IcogramLinkComponent,
  ],
  exports: [IcogramComponent, IcogramLinkComponent, VCLIconModule],
})
export class VCLIcogramModule {}
