import { Component } from '@angular/core';

@Component({
  templateUrl: 'button.component.html'
})
export class ButtonComponent {
  someAction(param) {
    console.log('Action handler, param:', param);
  }

  busy = false;
  disabled = false;

  changeButtonState() {
    this.busy = true;
    setTimeout(() => {
      this.busy = false;
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 2000);
    }, 2000);
  }
}
