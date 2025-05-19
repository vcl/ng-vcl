import { NgModule } from '@angular/core';
import { FlipSwitchComponent } from './flip-switch.component';

@NgModule({
  imports: [FlipSwitchComponent],
  exports: [FlipSwitchComponent],
  providers: [],
})
export class VCLFlipSwitchModule {}

export { FlipSwitchComponent };
