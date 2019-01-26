import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class MetalistDemoComponent {

  items: any = [
    { name: 'name 1', value: 1 },
    { name: 'name 2', value: 2 },
    { name: 'name 3', value: 3 },
    { name: 'name 4', value: 4 },
    { name: 'name 5', value: 5 },
  ];

  value1 = 2;
  value2 = [4, 5];

  onChange(value: number) {
    console.log('metalist change', value);
  }
}
