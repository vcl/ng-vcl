import {NgModule} from '@angular/core';
import {RatingComponent} from './rating.component';
import {CommonModule} from '@angular/common';
import { RatingItemComponent } from './rating-item.component';
import { VCLIconModule } from '../icon/index';
import { RatingItemLabelComponent } from './rating-label.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [CommonModule, VCLIconModule, PortalModule],
  exports: [RatingComponent, RatingItemComponent, RatingItemLabelComponent],
  declarations: [RatingComponent, RatingItemComponent, RatingItemLabelComponent],
  providers: [],
})
export class VCLRatingModule {
}
