import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'button-group.component.html'
})
export class ButtonGroupComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  someAction(param) {
    console.log('Action handler, param:', param);
  }

}
