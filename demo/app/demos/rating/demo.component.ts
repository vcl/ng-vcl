import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { VCLRatingComponent } from '../../../../lib/ng-vcl/src/rating/rating.component';
import { VCLRatingItemComponent } from '../../../../lib/ng-vcl/src/rating/rating-item.component';
import { VCLRatingItemLabelComponent } from '../../../../lib/ng-vcl/src/rating/rating-label.component';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    AsyncPipe,
    VCLRatingComponent,
    VCLRatingItemComponent,
    VCLRatingItemLabelComponent,
  ],
})
export class RatingDemoComponent {
  horizontalValue = 2.5;
  verticalValue = 2.5;
  customValue = 7.5;
}
