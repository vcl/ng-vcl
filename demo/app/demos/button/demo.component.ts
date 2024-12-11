import { Component } from '@angular/core';

@Component({
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.scss'],
    standalone: false
})
export class ButtonDemoComponent {
  someAction(param) {
    console.log('Action handler, param:', param);
  }
}
