import { Component, OnInit, ChangeDetectorRef} from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class DropdownDemoComponent {

  selectedItem = 2;

  items: any[] = [
    { label: 'item 1', value: 1 },
    { label: 'item 2 (preselected)', selected: true, value: 2 },
    { label: 'item 3', class: 'myclass myclass2', value: 3 },
    { label: 'item 4', value: 4 },
    { label: 'item 5', value: 5 },
    { label: 'item 6', sublabel: 'sublabel of item 6', value: 6 },
    { label: 'item 7', sublabel: 'sublabel of item 7', value: 7 },
    { label: 'item 8 (disabled)', sublabel: 'sublabel of item 8', disabled: true, value: 8 },
    { label: 'item 9', value: 9 },
    { label: 'item 10', value: 10 }
  ];

  onSelect(change: any) {
    console.dir(change.value);
  }
}
