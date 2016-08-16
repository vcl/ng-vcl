import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { VCLTetherModule } from '../tether/tether.module';

@NgModule({
  imports: [
    CommonModule,
    VCLTetherModule,
  ],
  exports: [PopoverComponent],
  declarations: [PopoverComponent]
})
export class VCLPopoverModule { }
