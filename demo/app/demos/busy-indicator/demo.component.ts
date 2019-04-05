import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .huge img {
      width: 5em;
      height: 5em;
    }
  `]
})
export class BusyDemoComponent {
  isBusy = false;

  makeBusy() {
    this.isBusy = true;
    setTimeout(() => this.isBusy = false, 3000);
  }
}
