import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLPopoverModule, VCLButtonModule } from '@ng-vcl/ng-vcl';
import { TourOverlayComponent } from './tour-overlay.component';
import { TourService } from './tour.service';
import { TourComponent } from './tour.component';
import { IHintOptions, HintConfig, HintOptions, Step } from './types';

export { TourService, IHintOptions, HintConfig, Step, TourComponent };

@NgModule({
  imports: [CommonModule, VCLPopoverModule, VCLButtonModule],
  exports: [TourComponent, TourOverlayComponent],
  declarations: [TourComponent, TourOverlayComponent],
  providers: [TourService],
})
export class VCLTourModule { }