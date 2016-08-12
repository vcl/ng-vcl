import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'button.component.html'
})
export class ButtonComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  someAction(param) {
    console.log('Action handler, param:', param);
  }

} 