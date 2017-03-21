import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  myObject: Object = {
    foo: "bar",
    names: [
      'alice',
      'bob',
      'carol'
    ]
  };
}
