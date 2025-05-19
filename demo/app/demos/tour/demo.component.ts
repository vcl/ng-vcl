import { Component } from '@angular/core';
import { TourService, VCLTourModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLTourModule],
})
export class TourDemoComponent {
  constructor(public tour: TourService) {}

  public startTour() {
    this.tour.initialize();
    this.tour.start();
  }
}
