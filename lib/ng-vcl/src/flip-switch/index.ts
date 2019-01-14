import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipSwitchComponent } from './flip-switch.component';

@NgModule({
  imports: [CommonModule],
  exports: [FlipSwitchComponent],
  declarations: [FlipSwitchComponent],
  providers: [],
})
export class VCLFlipSwitchModule { }

export { FlipSwitchComponent };
