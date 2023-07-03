import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BadgeComponent, BadgeRoundedDirective } from './badge.component';

export { BadgeComponent, BadgeRoundedDirective };
@NgModule({
  imports: [CommonModule],
  exports: [BadgeComponent, BadgeRoundedDirective],
  declarations: [BadgeComponent, BadgeRoundedDirective],
  providers: [],
})
export class VCLBadgeModule {}
