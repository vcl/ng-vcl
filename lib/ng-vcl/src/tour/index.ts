import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLButtonModule } from '../button/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import { VCLPopoverModule } from '../popover/index';

import { TourOverlayComponent } from './tour-overlay.component';
import { TourComponent } from './tour.component';
import { TourService, TourOptions } from './tour.service';

export { TourService, TourOptions, TourComponent, TourOverlayComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLPopoverModule,
    VCLButtonModule,
    VCLIcogramModule,
    VCLIconModule,
  ],
  exports: [TourComponent, TourOverlayComponent],
  declarations: [TourComponent, TourOverlayComponent],
  providers: [TourService],
})
export class VCLTourModule {}
