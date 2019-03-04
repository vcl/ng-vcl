import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from './badge.component';

@NgModule({
  imports: [CommonModule],
  exports: [BadgeDirective],
  declarations: [BadgeDirective],
  providers: [],
})
export class VCLBadgeModule { }
