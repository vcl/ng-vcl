import { Component } from '@angular/core';
import { TourService } from './tour.service';

@Component({
  selector: 'vcl-tour-overlay',
  templateUrl: './tour-overlay.component.html',
  styleUrls: ['./tour-overlay.component.css']
})
export class TourOverlayComponent {
  constructor(public readonly tour: TourService) { }
}
