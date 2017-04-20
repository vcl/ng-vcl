import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class LinkDemoComponent {
  someAction(param) {
    console.log('Action handler, param:', param);
  }
}
