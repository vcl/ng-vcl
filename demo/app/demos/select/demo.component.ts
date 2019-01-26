import { Component } from '@angular/core';

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
      value: 3
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
      label: 'item 6',
      value: 6
    },
    {
      label: 'item 7',
      value: 7
    },
    {
      label: 'item 8',
      value: 8
    },
    {
      label: 'item 9',
      value: 9
    },
    {
      label: 'item 10',
      value: 10
    },
    {
      label: 'item 11',
      value: 11
    },
    {
      label: 'item 12',
      value: 12
    },
    {
      label: 'item 13',
      value: 13
    },
    {
      label: 'item 14',
      value: 14
    },
    {
      label: 'item 15',
      value: 15
    },
    {
      label: 'item 16',
      value: 16
    },
    {
      label: 'item 17',
      value: 17
    },
    {
      label: 'item 18',
      value: 18
    },
    {
      label: 'item 19',
      value: 19
    },
    {
      label: 'item 20',
      value: 20
    },
    {
      label: 'item 21',
      value: 21
    },
    {
      label: 'item 22',
      value: 22
    },
    {
      label: 'item 23',
      value: 23
    },
    {
      label: 'item 24',
      value: 24
    },
    {
      label: 'item 25',
      value: 25,
      selected: true
    },
    {
      label: 'item 26',
      value: 26
    },
    {
      label: 'item 27',
      value: 27
    },
    {
      label: 'item 28' +
      '',
      value: 28

    }
  ];

  value: any = 5;

  onChange(change) {
    console.log('vcl-select: onChange()', change);
  }
}
