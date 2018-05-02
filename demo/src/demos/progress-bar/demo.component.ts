import { Component } from '@angular/core';
import { Observable ,  range ,  interval } from 'rxjs';
import { zip } from 'rxjs/operators';

@Component({
  templateUrl: 'demo.component.html'
})
export class ProgressBarDemoComponent {
  value$ = range(0, 1000).pipe(zip(interval(50), x => x));
}
