import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/zip';

@Component({
  templateUrl: 'demo.component.html'
})
export class ProgressBarDemoComponent {
  value$ = Observable.range(0, 1000).zip(Observable.interval(50), x => x);
}
