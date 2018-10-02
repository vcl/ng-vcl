import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '@ng-vcl/ng-vcl';
import { TourOverlayComponent } from './tour-overlay.component';
import { HintService } from './hint.service';
import { TourComponent } from './tour.component';
import { IHintOptions, HintConfig, HintOptions, Placement, Step } from './types';

export { HintService, IHintOptions, Step, TourComponent };

@NgModule({
  imports: [CommonModule, VCLButtonModule],
  exports: [TourComponent, TourOverlayComponent],
  declarations: [TourComponent, TourOverlayComponent],
  providers: [HintService],
})
export class VCLTourModule {}