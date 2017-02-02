import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'select.component.html'
})
export class SelectComponent implements OnInit {


  items1 = [
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

  items2 = [
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




  itemsStringValue = [
    {
      label: 'item 1',
      value: '1'
    },
    {
      label: 'item 2',
      value: '2'
    },
    {
      label: 'item 3',
      value: '3'
    },
    {
      label: 'item 4',
      value: '4'
    },
    {
      label: 'item 5',
      value: '5'
    },
    {
      label: 'item 10', sublabel: 'sublabel of item 10',
      value: '10'
    },
    {
      label: 'item 11',
      value: '11'
    },
    {
      label: 'item 12',
      value: 'foo12'
    }
  ];

  selectedItemSingle: any;
  selectedItemsMulti: any[];
  selectedItemSingleHtml: any;


  selectSingleValue = '5';
  selectMultiValue = [3, 4];
  selectSingleValueHtml = 5;

  constructor() {

  }

  ngOnInit() { }

  onChange(newValue) {
    console.log('vcl-select: onChange()');
    console.dir(newValue);
  }
}
