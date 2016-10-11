import { Component } from '@angular/core';

@Component({
  templateUrl: 'off-click.component.html'
})
export class OffClickComponent  {
  constructor() { }

  timestamp: number = 0;

  offClick() {
    this.timestamp = Date.now();
  }
}
