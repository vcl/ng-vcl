import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class OffClickDemoComponent  {

  clicks: number = 0;

  offClick() {
    this.clicks++;
  }
}
