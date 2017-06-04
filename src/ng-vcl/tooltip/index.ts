import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { L10nModule } from '../l10n/index';
import { TooltipService } from './tooltip.service';

@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [TooltipComponent, TooltipDirective],
  declarations: [TooltipComponent, TooltipDirective],
  providers: [TooltipService],
  entryComponents: [TooltipComponent]
})
export class VCLTooltipModule { }
