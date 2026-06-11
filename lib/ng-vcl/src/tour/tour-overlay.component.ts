import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TourService } from './tour.service';

@Component({
  selector: 'vcl-tour-overlay',
  templateUrl: './tour-overlay.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./tour-overlay.component.css'],
})
export class TourOverlayComponent {
  constructor(public readonly tour: TourService) {}
}
