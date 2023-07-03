import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.scss'],
})
export class ButtonDemoComponent {
  someAction(param: string) {
    console.log('Action handler, param:', param);
  }
}
