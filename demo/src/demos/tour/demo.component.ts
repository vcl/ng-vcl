import { Component, OnInit } from '@angular/core';
import { HintService } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html'
})
export class TourDemoComponent {
    constructor(public hint: HintService) {}

    startTour() {
      this.hint.start();
    }
}
