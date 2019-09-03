import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent, BadgeRoundedDirective } from './badge.component';

@NgModule({
  imports: [CommonModule],
  exports: [BadgeComponent, BadgeRoundedDirective],
  declarations: [BadgeComponent, BadgeRoundedDirective],
  providers: [],
})
export class VCLBadgeModule { }
