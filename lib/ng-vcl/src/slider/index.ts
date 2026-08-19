import { NgModule } from '@angular/core';

import { ScalePoint, VCLSliderComponent } from './slider.component';

export { VCLSliderComponent, ScalePoint };

@NgModule({
  imports: [VCLSliderComponent],
  exports: [VCLSliderComponent],
})
export class VCLSliderModule {}
