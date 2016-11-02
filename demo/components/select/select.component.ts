import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  templateUrl: 'select.component.html'
})
export class SelectComponent implements OnInit {
  @ViewChild('select') select;

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

  constructor() {
  }

  ngOnInit() { }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.selectx.selectItem(this.items[5]);
  //   }, 2000);
  // }

  onSelect(items: any[]) {
    if (items.length) {
      this.selectedItemSingle = items[0];
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
