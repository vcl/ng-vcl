import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link.component';
import { VCLIcogramModule } from '../icogram/index';

@NgModule({
  imports: [CommonModule, VCLIcogramModule],
  exports: [LinkComponent],
  declarations: [LinkComponent],
  providers: [],
})
export class VCLLinkModule { }
