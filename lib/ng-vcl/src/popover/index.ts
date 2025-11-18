import { NgModule } from '@angular/core';
import { VCLPopoverDirective } from './popover.directive';

export { VCLPopoverDirective };

@NgModule({
  imports: [VCLPopoverDirective],
  exports: [VCLPopoverDirective],
})
export class VCLPopoverModule {}
