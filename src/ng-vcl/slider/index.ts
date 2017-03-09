import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent, ScalePoint } from './slider.component';
import { L10nModule } from '../l10n/index';

export { SliderComponent, ScalePoint }

@NgModule({
  imports: [CommonModule, L10nModule ],
  exports: [SliderComponent],
  declarations: [SliderComponent],
  providers: [],
})
export class VCLSliderModule { }
