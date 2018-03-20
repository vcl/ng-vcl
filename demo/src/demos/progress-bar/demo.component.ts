import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { range } from 'rxjs/observable/range';
import { interval } from 'rxjs/observable/interval';
import { zip } from 'rxjs/operators';

@Component({
  templateUrl: 'demo.component.html'
})
export class ProgressBarDemoComponent {
  value$ = range(0, 1000).pipe(zip(interval(50), x => x));
}
