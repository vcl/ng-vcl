import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLRatingComponent,
  VCLRatingItemComponent,
  VCLRatingItemLabelComponent,
} from '@vcl/ng-vcl';

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
