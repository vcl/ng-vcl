import { Component } from '@angular/core';
import { TourService, TourOptions } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html'
})
export class TourDemoComponent {

  constructor(public tour: TourService) { }

  public startTour() {
    this.tour.initialize();
    this.tour.start();
  }
}
