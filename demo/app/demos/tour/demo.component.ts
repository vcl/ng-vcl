import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TourService, VCLTourModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLTourModule],
})
export class TourDemoComponent {
  constructor(public tour: TourService) {}

  public startTour() {
    this.tour.initialize();
    this.tour.start();
  }
}
