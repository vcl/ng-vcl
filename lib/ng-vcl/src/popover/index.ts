import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLOffClickModule } from '../off-click/index';
import { PopoverComponent, AttachmentX, AttachmentY, POPOVER_ANIMATIONS, PopoverAnimationConfig } from './popover.component';

export { PopoverComponent, AttachmentX, AttachmentY, POPOVER_ANIMATIONS, PopoverAnimationConfig };

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
