import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcogramComponent } from './icogram.component';
import { VCLIconModule } from '../icon/icon.module';

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [IcogramComponent],
  declarations: [IcogramComponent],
  providers: [],
})
export class VCLIcogramModule { }
