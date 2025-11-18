import { Component } from '@angular/core';
import { VCLOffClickDirective } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLOffClickDirective],
})
export class OffClickDemoComponent {
  clicks = 0;

  offClick() {
    this.clicks++;
  }
}
