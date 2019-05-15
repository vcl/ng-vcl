import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipInlineComponent } from './tooltip-inline.component';

export { TooltipComponent, TooltipDirective, TooltipInlineComponent };

@NgModule({
  imports: [CommonModule, OverlayModule],
  exports: [TooltipComponent, TooltipDirective, TooltipInlineComponent],
  declarations: [TooltipComponent, TooltipDirective, TooltipInlineComponent],
  entryComponents: [TooltipInlineComponent]
})

export class VCLTooltipModule { }
