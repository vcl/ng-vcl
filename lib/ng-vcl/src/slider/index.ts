import { NgModule } from '@angular/core';
import { SliderComponent, ScalePoint } from './slider.component';

export { SliderComponent, ScalePoint };

@NgModule({
  imports: [SliderComponent],
  exports: [SliderComponent],
})
export class VCLSliderModule {}
