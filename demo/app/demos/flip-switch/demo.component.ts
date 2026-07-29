import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FlipSwitchComponent } from '../../../../lib/ng-vcl/src/flip-switch/flip-switch.component';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FlipSwitchComponent],
})
export class FlipSwitchDemoComponent {
  value1 = false;
  value2 = false;
  value3 = true;
  value4 = false;
  value5 = false;
}
