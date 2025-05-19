import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { VCLRatingModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [AsyncPipe, VCLRatingModule],
})
export class RatingDemoComponent {
  horizontalValue = 2.5;
  verticalValue = 2.5;
  customValue = 7.5;
}
