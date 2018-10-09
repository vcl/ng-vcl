import { Component, OnInit } from '@angular/core';
import { TourService, AttachmentX, AttachmentY } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html'
})
export class TourDemoComponent {
  public readonly debugTour: boolean = false;
  public readonly debugPopover: boolean = false;

  constructor(public tour: TourService) { }

  public startTour() {
    this.tour.initialize({
      debug: this.debugTour,
    });
    this.tour.start();
  }

  public readonly AttachmentX = AttachmentX;
  public readonly AttachmentY = AttachmentY;
}
