import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipSwitchComponent } from './flip-switch.component';
import { VCLMetalistModule } from '../metalist/index';

@NgModule({
  imports: [CommonModule, VCLMetalistModule],
  exports: [FlipSwitchComponent],
  declarations: [FlipSwitchComponent],
  providers: [],
})
export class VCLFlipSwitchModule { }
