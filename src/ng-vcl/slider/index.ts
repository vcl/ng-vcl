import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent, ScalePoint } from './slider.component';

export { SliderComponent, ScalePoint };

@NgModule({
  imports: [CommonModule ],
  exports: [SliderComponent],
  declarations: [SliderComponent],
  providers: [],
})
export class VCLSliderModule { }
