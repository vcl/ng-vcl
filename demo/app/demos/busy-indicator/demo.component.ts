import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./demo.component.scss'],
})
export class BusyDemoComponent {
  isBusy = false;

  makeBusy() {
    this.isBusy = true;
    setTimeout(() => (this.isBusy = false), 3000);
  }
}
