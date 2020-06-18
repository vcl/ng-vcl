import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLOffClickModule } from '../off-click/index';
import { PopoverDirective } from './popover.directive';
import { VCLLayerModule } from '../layer/index';

export { PopoverDirective };

@NgModule({
  imports: [
    CommonModule,
    VCLOffClickModule,
    VCLLayerModule,
  ],
  providers: [ ],
  exports: [
    VCLLayerModule,
    PopoverDirective
  ],
  declarations: [
    PopoverDirective
  ]
})

export class VCLPopoverModule { }
