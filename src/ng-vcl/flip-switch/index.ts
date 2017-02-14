import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipSwitchComponent } from './flip-switch.component';
import { VCLMetalistModule } from '../metalist/index';
import { L10nModule } from '../l10n/index';

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule],
  exports: [FlipSwitchComponent],
  declarations: [FlipSwitchComponent],
  providers: [],
})
export class VCLFlipSwitchModule { }
