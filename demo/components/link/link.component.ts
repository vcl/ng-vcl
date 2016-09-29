import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'link.component.html'
})
export class LinkComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  someAction(param) {
    console.log('Action handler, param:', param);
  }

}
