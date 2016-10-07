import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'select.component.html'
})
export class SelectComponent implements OnInit {

  items: any[] = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3' },
    { label: 'item 4' },
    { label: 'item 5' },
    { label: 'item 6', sublabel: 'sublabel of item 6' },
    { label: 'item 7', sublabel: 'sublabel of item 7' },
    { label: 'item 8', sublabel: 'sublabel of item 8' },
    { label: 'item 9' },
    { label: 'item 10' }
  ]

  selectedItemSingle: any;

  selectedItemsMulti: any[];

  constructor() { }

  ngOnInit() { }

  onSelect(items: any[]) {
    if (items.length) {
      this.selectedItemSingle = items.pop();
    } else {
      this.selectedItemSingle = null;
    }
    console.log('Selected Items: ', items);
  }

  onSelectMulti(items: any[]) {
    this.selectedItemsMulti = items;
    console.log('Selected Items: ', items);
  }
}
