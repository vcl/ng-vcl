import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { L10nModule } from '../l10n/index';

@NgModule({
  imports: [CommonModule, L10nModule],
  exports: [TooltipComponent, TooltipDirective],
  declarations: [TooltipComponent, TooltipDirective],
  providers: [],
  entryComponents: [TooltipComponent]
})
export class VCLTooltipModule { }
