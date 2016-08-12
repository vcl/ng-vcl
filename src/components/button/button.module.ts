import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { VCLIcogramModule } from '../icogram/icogram.module';

@NgModule({
  imports: [CommonModule, VCLIcogramModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
  providers: [],
})
export class VCLButtonModule { }
