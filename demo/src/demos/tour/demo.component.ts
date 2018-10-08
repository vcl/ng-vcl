import { Component, OnInit } from '@angular/core';
import { HintService, AttachmentX, AttachmentY } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html'
})
export class TourDemoComponent {
  public readonly debugTour: boolean = false;
  public readonly debugPopover: boolean = false;

  constructor(public hint: HintService) { }

  public startTour() {
    this.hint.start();
  }

  public readonly AttachmentX = AttachmentX;
  public readonly AttachmentY = AttachmentY;
}
