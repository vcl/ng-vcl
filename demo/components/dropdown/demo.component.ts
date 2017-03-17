import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class DropdownDemoComponent implements OnInit {

  selectedItem: any;

  expanded: boolean = false;
  expanded2: boolean = false;
  expanded3: boolean = false;
  expanded4: boolean = false;
  expanded5: boolean = false;
  expanded6: boolean = false;
  expanded7: boolean = false;
  expanded8: boolean = false;

  constructor() { }

  ngOnInit() { }

  items: any[] = [
    { label: 'item 1' },
    { label: 'item 2 (preselected)', selected: true },
    { label: 'item 3', class: 'myclass myclass2' },
    { label: 'item 4' },
    { label: 'item 5' },
    { label: 'item 6', sublabel: 'sublabel of item 6' },
    { label: 'item 7', sublabel: 'sublabel of item 7' },
    { label: 'item 8', sublabel: 'sublabel of item 8' },
    { label: 'item 9' },
    { label: 'item 10' }
  ];

  itemsMarked: any[] = [
    { label: 'item 1' },
    { label: 'item 2 (marked)', marked: true },
    { label: 'item 3', class: 'myclass myclass2' },
    { label: 'item 4 (preselect)', selected: true },
    { label: 'item 5' },
    { label: 'item 6', sublabel: 'sublabel of item 6' },
    { label: 'item 7 (marked)', sublabel: 'sublabel of item 7', marked: true },
    { label: 'item 8', sublabel: 'sublabel of item 8' },
    { label: 'item 9' },
    { label: 'item 10' }
  ];

  itemsNgModel: any[] = [
    { label: 'item 1', value: 1 },
    { label: 'item 2', value: 2 },
    { label: 'item 3', value: 3 }
  ];

  item = 2;

  onSelect(value: any) {
    console.log('new dropdown-value:');
    console.dir(value);
  }

  expand() {
    this.expanded = !this.expanded;
  }
  expand2() {
    this.expanded2 = !this.expanded2;
  }
  expand3() {
    this.expanded3 = !this.expanded3;
  }
  expand4() {
    this.expanded4 = !this.expanded4;
  }
  expand5() {
    this.expanded5 = !this.expanded5;
  }
  expand6() {
    this.expanded6 = !this.expanded6;
  }
  expand7() {
    this.expanded7 = !this.expanded7;
  }
  expand8() {
    this.expanded8 = !this.expanded8;
  }
}
