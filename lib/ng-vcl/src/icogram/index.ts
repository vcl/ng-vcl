import { NgModule } from '@angular/core';
import { VCLIconModule } from '../icon/index';
import {
  VCLIcogramComponent,
  VCLIcogramLinkComponent,
} from './icogram.component';

export { VCLIcogramComponent, VCLIcogramLinkComponent };

@NgModule({
  imports: [VCLIconModule, VCLIcogramComponent, VCLIcogramLinkComponent],
  exports: [VCLIcogramComponent, VCLIcogramLinkComponent, VCLIconModule],
})
export class VCLIcogramModule {}
