import { Component } from '@angular/core';
import { VCLSliderModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLSliderModule],
})
export class SliderDemoComponent {
  value1 = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
  value5 = 0;
  value6 = 0;
}
