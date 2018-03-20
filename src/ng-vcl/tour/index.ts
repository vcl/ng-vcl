import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOverlayComponent } from './tour-overlay.component';
import { HintService } from './hint.service';
import { TourComponent } from './tour.component';
import { IHintService, IHintOptions, HintConfig, HintOptions, Placement, Step } from './types';

export { HintService, IHintService, IHintOptions, Step, TourComponent };

@NgModule({
  imports: [CommonModule],
  exports: [TourComponent, TourOverlayComponent],
  declarations: [TourComponent, TourOverlayComponent],
  providers: [HintService],
})
export class VCLTourModule {}