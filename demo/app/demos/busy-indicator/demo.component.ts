import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class BusyDemoComponent {
  isBusy = false;

  makeBusy() {
    this.isBusy = true;
    setTimeout(() => this.isBusy = false, 3000);
  }
}
