import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'json-editor.component.html'
})
export class JsonEditorComponent implements OnInit {


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
