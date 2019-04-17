import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '../button/index';
import { VCLPopoverModule } from '../popover/index';
import { VCLIcogramModule } from '../icogram';
import { VCLIconModule } from '../icon';
import { TourOverlayComponent } from './tour-overlay.component';
import { TourService, TourOptions } from './tour.service';
import { TourComponent } from './tour.component';

export { TourService, TourOptions, TourComponent };

@NgModule({
  imports: [CommonModule, VCLPopoverModule, VCLButtonModule, VCLIcogramModule, VCLIconModule],
  exports: [TourComponent, TourOverlayComponent],
  declarations: [TourComponent, TourOverlayComponent],
  providers: [TourService],
})
export class VCLTourModule { }
