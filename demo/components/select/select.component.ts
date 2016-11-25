import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  templateUrl: 'select.component.html'
})
export class SelectComponent implements OnInit {
  items: any[] = [
    {
      label: 'item 1',
      value: 1
    },
    {
      label: 'item 2',
      value: 2
    },
    {
      label: 'item 3',
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
      label: 'item 6', sublabel: 'sublabel of item 6',
      value: 6
    }
  ];

  selectedItemSingle: any;
  selectedItemsMulti: any[];
  selectedItemSingleHtml: any;


  selectSingleValue = 5;
  selectMultiValue = [3, 4];

  constructor() {
  }

  ngOnInit() { }

  onChange(newValue) {
    console.log('onChange:');
    console.dir(newValue);
  }
}
