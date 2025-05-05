import { NgModule } from '@angular/core';
import { FlipSwitchComponent } from './flip-switch.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [FlipSwitchComponent],
  exports: [FlipSwitchComponent],
  providers: [],
})
export class VCLFlipSwitchModule {}

export { FlipSwitchComponent };
