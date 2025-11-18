import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { VCLTooltipComponent } from './tooltip.component';
import { VCLTooltipDirective } from './tooltip.directive';

export { VCLTooltipComponent, VCLTooltipDirective };

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    VCLTooltipComponent,
    VCLTooltipDirective,
  ],
  exports: [VCLTooltipComponent, VCLTooltipDirective, PortalModule],
})
export class VCLTooltipModule {}
