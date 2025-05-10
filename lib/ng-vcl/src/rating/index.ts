import { NgModule } from '@angular/core';
import { RatingComponent } from './rating.component';
import { RatingItemComponent } from './rating-item.component';
import { RatingItemLabelComponent } from './rating-label.component';

export { RatingComponent, RatingItemComponent, RatingItemLabelComponent };
@NgModule({
  imports: [RatingComponent, RatingItemComponent, RatingItemLabelComponent],
  exports: [RatingComponent, RatingItemComponent, RatingItemLabelComponent],
})
export class VCLRatingModule {}
