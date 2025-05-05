import { Component } from '@angular/core';
import { VCLFlipSwitchModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLFlipSwitchModule],
})
export class FlipSwitchDemoComponent {
  value1 = false;
  value2 = false;
  value3 = true;
  value4 = false;
  value5 = false;
}
