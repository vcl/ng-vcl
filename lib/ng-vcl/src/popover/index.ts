import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLOffClickModule } from '../off-click/index';
import { PopoverComponent } from './popover.component';

export { PopoverComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLOffClickModule
  ],
  providers: [ ],
  exports: [PopoverComponent],
  declarations: [PopoverComponent]
})

export class VCLPopoverModule { }
