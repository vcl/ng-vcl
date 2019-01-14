import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class ButtonDemoComponent {
  someAction(param) {
    console.log('Action handler, param:', param);
  }
}
