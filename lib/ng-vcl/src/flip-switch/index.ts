import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLFormControlGroupModule } from '../form-control-group/index';
import { FlipSwitchComponent } from './flip-switch.component';

@NgModule({
  imports: [CommonModule, VCLFormControlGroupModule],
  exports: [FlipSwitchComponent],
  declarations: [FlipSwitchComponent],
  providers: [],
})
export class VCLFlipSwitchModule { }

export { FlipSwitchComponent };
