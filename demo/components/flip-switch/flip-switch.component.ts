import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'flip-switch.component.html'
})
export class FlipSwitchComponent implements OnInit {

  selectedItem: any;

  value: boolean = false;

  constructor() { }

  ngOnInit() { }

  onSelect(selectedItems: any[]) {
    console.log(selectedItems);
    if (selectedItems && selectedItems[0]) {
      this.selectedItem = selectedItems[0];
    } else {
      this.selectedItem = null;
    }
  }

}
