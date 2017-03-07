import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'button-group.component.html'
})
export class ButtonGroupComponent implements OnInit {

  idx1 = 1;
  idx2 = [0, 2];
  idx3;

  constructor() { }

  ngOnInit() { }

  buttonClick(param) {
    console.log('buttonClick, param:', param);
  }

  selectionChange1(param) {
    console.log('selectionChange1, param:', param);
  }

  selectionChange2(param) {
    console.log('selectionChange2, param:', param);
  }

  selectionChange3(param) {
    console.log('selectionChange3, param:', param);
  }
}
