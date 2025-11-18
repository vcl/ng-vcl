import { NgModule } from '@angular/core';
import { VCLSliderComponent, ScalePoint } from './slider.component';

export { VCLSliderComponent, ScalePoint };

@NgModule({
  imports: [VCLSliderComponent],
  exports: [VCLSliderComponent],
})
export class VCLSliderModule {}
