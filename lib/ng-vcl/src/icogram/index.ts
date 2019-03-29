import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { IcogramComponent, IcogramLinkComponent } from './icogram.component';

export { IcogramComponent, IcogramLinkComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [IcogramComponent, IcogramLinkComponent],
  declarations: [IcogramComponent, IcogramLinkComponent],
  providers: [],
})
export class VCLIcogramModule { }
