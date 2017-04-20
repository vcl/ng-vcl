import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class FlipSwitchDemoComponent {

  selectedItem: any;

  value: boolean = false;

  onChange(ev) {
    console.log('changed:');
    console.dir(ev);
  }
}
