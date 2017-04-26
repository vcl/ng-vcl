import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class ButtonDemoComponent {
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
