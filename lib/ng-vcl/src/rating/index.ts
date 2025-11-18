import { NgModule } from '@angular/core';
import { VCLRatingComponent } from './rating.component';
import { VCLRatingItemComponent } from './rating-item.component';
import { VCLRatingItemLabelComponent } from './rating-label.component';

export {
  VCLRatingComponent,
  VCLRatingItemComponent,
  VCLRatingItemLabelComponent,
};
@NgModule({
  imports: [
    VCLRatingComponent,
    VCLRatingItemComponent,
    VCLRatingItemLabelComponent,
  ],
  exports: [
    VCLRatingComponent,
    VCLRatingItemComponent,
    VCLRatingItemLabelComponent,
  ],
})
export class VCLRatingModule {}
