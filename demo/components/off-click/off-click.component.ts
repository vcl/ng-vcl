import { Component } from '@angular/core';

@Component({
  templateUrl: 'off-click.component.html'
})
export class OffClickComponent  {
  constructor() { }

  clicks: number = 0;

  offClick() {
    this.clicks++;
  }
}
