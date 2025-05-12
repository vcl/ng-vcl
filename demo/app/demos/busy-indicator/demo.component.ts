import { Component, ViewEncapsulation } from '@angular/core';
import { VCLBusyIndicatorModule, VCLButtonModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./demo.component.scss'],
  imports: [VCLBusyIndicatorModule, VCLButtonModule],
})
export class BusyDemoComponent {
  isBusy = false;

  makeBusy() {
    this.isBusy = true;
    setTimeout(() => (this.isBusy = false), 3000);
  }
}
