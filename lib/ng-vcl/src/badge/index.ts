import { NgModule } from '@angular/core';
import { BadgeComponent, BadgeRoundedDirective } from './badge.component';

export { BadgeComponent, BadgeRoundedDirective };
@NgModule({
  imports: [BadgeComponent, BadgeRoundedDirective],
  exports: [BadgeComponent, BadgeRoundedDirective],
})
export class VCLBadgeModule {}
