import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import { TourOverlayComponent } from './tour-overlay.component';
import { TourService, TourOptions } from './tour.service';
import { TourComponent } from './tour.component';

export { TourService, TourOptions, TourComponent, TourOverlayComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLIcogramModule,
    VCLIconModule,
    TourComponent,
    TourOverlayComponent,
  ],
  exports: [TourComponent, TourOverlayComponent],
  providers: [TourService],
})
export class VCLTourModule {}
