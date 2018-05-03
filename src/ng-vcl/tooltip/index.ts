import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent, AnimationState, Placement } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipService } from './tooltip.service';

export { TooltipComponent, AnimationState, Placement };

@NgModule({
  imports: [CommonModule],
  exports: [TooltipComponent, TooltipDirective],
  declarations: [TooltipComponent, TooltipDirective],
  providers: [TooltipService],
  entryComponents: [TooltipComponent]
})
export class VCLTooltipModule { }
