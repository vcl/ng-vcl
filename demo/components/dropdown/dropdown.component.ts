import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  selectedItem: any;

  expanded: boolean = false;
  expanded2: boolean = false;
  expanded3: boolean = true;
  expanded4: boolean = true;

  constructor() { }

  ngOnInit() { }

  items: any[] = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3', class: 'myclass myclass2' },
    { label: 'item 4' },
    { label: 'item 5' },
    { label: 'item 6', sublabel: 'sublabel of item 6' },
    { label: 'item 7', sublabel: 'sublabel of item 7' },
    { label: 'item 8', sublabel: 'sublabel of item 8' },
    { label: 'item 9' },
    { label: 'item 10' }
  ];

  items2: any[] = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3', class: 'myclass myclass2' },
    { label: 'item 4 (preselect)', selected: true },
    { label: 'item 5' },
    { label: 'item 6', sublabel: 'sublabel of item 6' },
    { label: 'item 7', sublabel: 'sublabel of item 7' },
    { label: 'item 8', sublabel: 'sublabel of item 8' },
    { label: 'item 9' },
    { label: 'item 10' }
  ];
  items3: any[] = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3', class: 'myclass myclass2' },
    { label: 'item 4 (preselect)', selected: true },
    { label: 'item 5' },
    { label: 'item 6', sublabel: 'sublabel of item 6' },
    { label: 'item 7', sublabel: 'sublabel of item 7' },
    { label: 'item 8', sublabel: 'sublabel of item 8' },
    { label: 'item 9' },
    { label: 'item 10' }
  ];

  items4: any[] = [
    { label: 'item 1' },
    { label: 'item 2' },
    { label: 'item 3', class: 'myclass myclass2' },
    { label: 'item 4 (preselect)', selected: true },
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
}
