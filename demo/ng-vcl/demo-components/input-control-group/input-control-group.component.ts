import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  templateUrl: 'input-control-group.component.html'
})
export class InputControlGroupComponent implements OnInit {


  type: string | undefined;
  label: string;


  message = new Subject();
  // emit messages over time
  obs = Observable
    .interval(2000)
    .scan((s, x) => {
      s++;
      if (s > 3) s = 0;
      return s;
    })
    .map(s => {
      if (s == 0) return 'error';
      if (s == 1) return 'warning';
      if (s == 2) return 'success';
      if (s == 3) return undefined;
    })
    .map(type => {

      this.type = type;
      this.label = 'my custom ' + type;

      return {
        type,
        value: 'my custom ' + type
      };
    })
    .subscribe(msg => this.message.next(msg));


  constructor() {


  }

  ngOnInit() { }

}
