import { NgModule } from '@angular/core';
import { VCLIconModule } from '../icon/index';
import { IcogramComponent, IcogramLinkComponent } from './icogram.component';

export { IcogramComponent, IcogramLinkComponent };

@NgModule({
  imports: [VCLIconModule, IcogramComponent, IcogramLinkComponent],
  exports: [IcogramComponent, IcogramLinkComponent, VCLIconModule],
})
export class VCLIcogramModule {}
