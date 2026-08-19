import { NgModule } from '@angular/core';

import { TourOverlayComponent } from './tour-overlay.component';
import { TourComponent } from './tour.component';
import { TourOptions, TourService } from './tour.service';

export { TourService, TourOptions, TourComponent, TourOverlayComponent };

@NgModule({
  imports: [TourComponent, TourOverlayComponent],
  exports: [TourComponent, TourOverlayComponent],
  providers: [TourService],
})
export class VCLTourModule {}
