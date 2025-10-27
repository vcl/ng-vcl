import { NgModule } from '@angular/core';
import { VCLBadgeComponent, VCLBadgeRoundedDirective } from './badge.component';

export { VCLBadgeComponent, VCLBadgeRoundedDirective };
@NgModule({
  imports: [VCLBadgeComponent, VCLBadgeRoundedDirective],
  exports: [VCLBadgeComponent, VCLBadgeRoundedDirective],
})
export class VCLBadgeModule {}
