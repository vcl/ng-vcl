import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

export { TooltipComponent, TooltipDirective };

@NgModule({
    imports: [CommonModule, OverlayModule, PortalModule],
    exports: [TooltipComponent, TooltipDirective, PortalModule],
    declarations: [TooltipComponent, TooltipDirective]
})

export class VCLTooltipModule { }
