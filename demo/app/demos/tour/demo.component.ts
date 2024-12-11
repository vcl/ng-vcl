import { Component } from '@angular/core';
import { TourService, TourOptions } from '@vcl/ng-vcl';

@Component({
    templateUrl: 'demo.component.html',
    standalone: false
})
export class TourDemoComponent {
  constructor(public tour: TourService) {}

  public startTour() {
    this.tour.initialize();
    this.tour.start();
  }
}
