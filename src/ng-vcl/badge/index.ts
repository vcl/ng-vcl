import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { VCLMetalistModule } from '../metalist/index';

@NgModule({
  imports: [CommonModule, VCLMetalistModule],
  exports: [BadgeComponent],
  declarations: [BadgeComponent],
  providers: [],
})
export class VCLBadgeModule { }
