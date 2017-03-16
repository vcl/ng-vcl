import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { VCLOffClickModule } from '../off-click/index';

export { PopoverComponent }

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
