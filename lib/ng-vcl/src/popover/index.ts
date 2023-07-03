import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLLayerModule } from '../layer/index';
import { VCLOffClickModule } from '../off-click/index';

import { PopoverDirective } from './popover.directive';

export { PopoverDirective };

@NgModule({
  imports: [CommonModule, VCLOffClickModule, VCLLayerModule],
  providers: [],
  exports: [VCLLayerModule, PopoverDirective],
  declarations: [PopoverDirective],
})
export class VCLPopoverModule {}
