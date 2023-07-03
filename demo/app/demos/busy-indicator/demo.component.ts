import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
  styleUrls: ['./demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BusyDemoComponent {
  isBusy = false;

  makeBusy() {
    this.isBusy = true;
    setTimeout(() => (this.isBusy = false), 3000);
  }
}
