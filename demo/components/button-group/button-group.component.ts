import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'button-group.component.html'
})
export class ButtonGroupComponent implements OnInit {

  idx1;
  idx2;

  constructor() { }

  ngOnInit() { }

  buttonClick(param) {
    console.log('buttonClick, param:', param);
  }

  selectionChange1(param) {
    console.log('selectionChange1, param:', param);
    this.idx1 = param.index;
  }

  selectionChange2(param) {
    console.log('selectionChange2, param:', param);
    this.idx2 = param.index;
  }

}
