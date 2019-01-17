import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from './badge.component';
import { VCLMetalistModule } from '../metalist/index';

@NgModule({
  imports: [CommonModule, VCLMetalistModule],
  exports: [BadgeDirective],
  declarations: [BadgeDirective],
  providers: [],
})
export class VCLBadgeModule { }
