import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class SelectDemoComponent {
  items = [
    {
      label: 'item 1',
      value: 1
    },
    {
      label: 'item 2',
      value: 2
    },
    {
      label: 'item 3 (preselect)',
      value: 3,
      selected: true
    },
    {
      label: 'item 4',
      value: 4
    },
    {
      label: 'item 5',
      value: 5
    },
    {
      label: 'item 6', sublabel: 'sublabel of item 6',
      value: 6
    }
  ];

  value: any = 5;

  onChange(change) {
    console.log('vcl-select: onChange()', change);
  }
}
