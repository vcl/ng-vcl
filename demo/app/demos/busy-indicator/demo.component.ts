import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  VCLBusyIndicatorComponent,
  VCLBusyIndicatorCoverComponent,
  VCLButtonComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLBusyIndicatorComponent,
    VCLBusyIndicatorCoverComponent,
    VCLButtonComponent,
  ],
})
export class BusyDemoComponent {
  isBusy = false;

  makeBusy() {
    this.isBusy = true;
    setTimeout(() => (this.isBusy = false), 3000);
  }
}
