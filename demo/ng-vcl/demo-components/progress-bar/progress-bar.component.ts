import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'progress-bar.component.html'
})
export class ProgressBarComponent {
  value$ = Observable.range(0, 1000).zip(Observable.interval(50), x => x);
}
