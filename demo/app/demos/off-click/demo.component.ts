import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
})
export class OffClickDemoComponent {
  clicks = 0;

  offClick() {
    this.clicks++;
  }
}
