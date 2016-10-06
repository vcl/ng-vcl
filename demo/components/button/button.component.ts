import { Component } from '@angular/core';

@Component({
  templateUrl: 'button.component.html'
})
export class ButtonComponent {
  someAction(param) {
    console.log('Action handler, param:', param);
  }
}
