import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'demo.component.html'
})
export class JsonEditorDemoComponent  {
  myObject: Object = {
    foo: 'bar',
    names: [
      'alice',
      'bob',
      'carol'
    ]
  };
}
