import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  templateUrl: 'slider.component.html'
})
export class SliderComponent implements OnInit {
  @ViewChild('select') select;



  selectedItemSingle: any;

  selectedItemsMulti: any[];

  constructor() {
  }

  ngOnInit() { }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.select.selectItem(this.items[5]);
    // }, 2000);
  }

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
