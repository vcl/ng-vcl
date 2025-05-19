import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { VCLProgressBarModule } from '@vcl/ng-vcl';
import { zip, range, interval, animationFrameScheduler } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: 'demo.component.html',
  imports: [AsyncPipe, VCLProgressBarModule],
})
export class ProgressBarDemoComponent {
  value$ = zip(range(0, 1000), interval(50, animationFrameScheduler)).pipe(
    map(([x]) => x)
  );
}
