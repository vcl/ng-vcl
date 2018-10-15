import { Component } from '@angular/core';
import { TourService, AttachmentX, AttachmentY, TourOptions } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html'
})
export class TourDemoComponent {
  public readonly debug: boolean = false;
  public readonly debugTour: boolean = false;
  public readonly debugPopover: boolean = false;

  constructor(public tour: TourService) { }

  public startTour() {
    this.tour.initialize({
      debug: this.debug,
      debugTour: this.debugTour,
      debugPopover: this.debugPopover,
    } as TourOptions);
    this.tour.start();
  }

  public readonly AttachmentX = AttachmentX;
  public readonly AttachmentY = AttachmentY;
}
