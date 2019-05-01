import {NgModule} from '@angular/core';
import {RatingComponent} from './rating.component';
import {CommonModule} from '@angular/common';
import { RatingItemComponent } from './rating-item.component';
import { VCLIconModule } from '../icon';

@NgModule({
  imports: [CommonModule, VCLIconModule],
  exports: [RatingComponent, RatingItemComponent],
  declarations: [RatingComponent, RatingItemComponent],
  providers: [],
})
export class VCLRatingModule {
}
