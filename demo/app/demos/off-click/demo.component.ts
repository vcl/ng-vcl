import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLOffClickDirective } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLOffClickDirective],
})
export class OffClickDemoComponent {
  clicks = 0;

  offClick() {
    this.clicks++;
  }
}
