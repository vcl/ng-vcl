import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class ButtonGroupDemoComponent {

  idx1 = 1;
  idx2 = [0, 2];
  idx3;

  buttonClick(param) {
    console.log('buttonClick, param:', param);
  }
}
