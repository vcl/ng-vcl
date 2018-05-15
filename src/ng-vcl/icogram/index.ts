import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLLayoutModule } from '../core/index';
import { VCLIconModule } from '../icon/index';
import { IcogramComponent, IcogramSpanComponent } from './icogram.component';

export { IcogramComponent, IcogramSpanComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule, VCLLayoutModule],
  exports: [IcogramComponent, IcogramSpanComponent, VCLLayoutModule],
  declarations: [IcogramComponent, IcogramSpanComponent],
  providers: [],
})
export class VCLIcogramModule { }
