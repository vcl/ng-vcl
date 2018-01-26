import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { VCLMetalistModule } from '../metalist/index';
import { L10nModule } from '../l10n/index';

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule],
  exports: [BadgeComponent],
  declarations: [BadgeComponent],
  providers: [],
})
export class VCLBadgeModule { }
