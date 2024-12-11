import { Component } from '@angular/core';

@Component({
    templateUrl: 'demo.component.html',
    standalone: false
})
export class OffClickDemoComponent {
  clicks = 0;

  offClick() {
    this.clicks++;
  }
}
