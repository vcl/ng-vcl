import { NgModule } from '@angular/core';

import { VCLTooltipComponent } from './tooltip.component';
import { VCLTooltipDirective } from './tooltip.directive';

export { VCLTooltipComponent, VCLTooltipDirective };

@NgModule({
  imports: [VCLTooltipComponent, VCLTooltipDirective],
  exports: [VCLTooltipComponent, VCLTooltipDirective],
})
export class VCLTooltipModule {}
