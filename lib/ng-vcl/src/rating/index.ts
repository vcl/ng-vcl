import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLIconModule } from '../icon/index';

import { RatingItemComponent } from './rating-item.component';
import { RatingItemLabelComponent } from './rating-label.component';
import { RatingComponent } from './rating.component';

export { RatingComponent, RatingItemComponent, RatingItemLabelComponent };
@NgModule({
  imports: [CommonModule, VCLIconModule, PortalModule],
  exports: [RatingComponent, RatingItemComponent, RatingItemLabelComponent],
  declarations: [
    RatingComponent,
    RatingItemComponent,
    RatingItemLabelComponent,
  ],
  providers: [],
})
export class VCLRatingModule {}
