import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class SelectDemoComponent {

  value1 = undefined;
  value2 = [];

  items = Array.from(Array(30).keys()).map(i => ({
    label: 'item ' + i + 1,
    value: i + 1
  }));

}
