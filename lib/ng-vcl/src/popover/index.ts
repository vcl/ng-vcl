import { NgModule } from '@angular/core';
import { PopoverDirective } from './popover.directive';

export { PopoverDirective };

@NgModule({
  imports: [PopoverDirective],
  exports: [PopoverDirective],
})
export class VCLPopoverModule {}
