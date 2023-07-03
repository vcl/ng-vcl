import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLFormControlGroupModule } from '../form-control-group/index';

import { SliderComponent, ScalePoint } from './slider.component';

export { SliderComponent, ScalePoint };

@NgModule({
  imports: [CommonModule, VCLFormControlGroupModule],
  exports: [SliderComponent],
  declarations: [SliderComponent],
  providers: [],
})
export class VCLSliderModule {}
