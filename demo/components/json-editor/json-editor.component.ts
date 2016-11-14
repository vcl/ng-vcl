import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'json-editor.component.html'
})
export class JsonEditorComponent implements OnInit {

  selectedItem: any;

  expanded: boolean = true;

  constructor() { }

  ngOnInit() { }

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
  ];

  onSelect(selectedItems: any[]) {
    console.log(selectedItems);
    if (selectedItems && selectedItems[0]) {
      this.selectedItem = selectedItems[0];
    } else {
      this.selectedItem = null;
    }
  }

  expand() {
    this.expanded = !this.expanded;
  }
}
