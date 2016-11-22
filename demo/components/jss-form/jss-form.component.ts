import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'jss-form.component.html'
})
export class JssFormComponent implements OnInit {


  myObject: Object = {
    foo: "baar",
    names: [
      'alice',
      'bob',
      'carol'
    ]

  };


  constructor() { }

  ngOnInit() { }

}
