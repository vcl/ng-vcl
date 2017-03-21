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

  selectedItemSingle: any = 1;
  selectedItemsMulti: any[];
  selectedItemSingleHtml: any;

  selectSingleValue = 5;
  selectMultiValue = [2, 4];
  selectSingleValueHtml = 5;

  onChange(newValue) {
    console.log('vcl-select: onChange()');
    console.dir(newValue);
  }
}
