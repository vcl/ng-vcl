import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { IcogramComponent } from './icogram.component';

export { IcogramComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [IcogramComponent],
  declarations: [IcogramComponent],
  providers: [],
})
export class VCLIcogramModule { }
