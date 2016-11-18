import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, L10nModule ],
  exports: [SliderComponent],
  declarations: [SliderComponent],
  providers: [],
})
export class VCLSliderModule { }
