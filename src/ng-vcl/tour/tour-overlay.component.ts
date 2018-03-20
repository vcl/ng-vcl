import { Component } from '@angular/core';
import { HintService } from './hint.service';

@Component({
  selector: 'vcl-tour-overlay',
  templateUrl: './tour-overlay.component.html',
  styleUrls: ['./tour-overlay.component.css']
})
export class TourOverlayComponent {
  show: boolean;

  constructor(public hintService: HintService) {
    this.hintService.overlay$.subscribe(data => this.show = data);
  }

  dismiss(): void {
    if (this.hintService.hintOptions.dismissOnOverlay)
      this.hintService.overlayNext();
  }
}