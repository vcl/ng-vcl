import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class DropdownDemoComponent {

  selectedItem = 10;

  items: any[] = [
    { label: 'item 1', value: 1 },
    { label: 'item 2', value: 2 },
    { label: 'item 3', class: 'myclass myclass2', value: 3 },
    { label: 'item 4', value: 4 },
    { label: 'item 5', value: 5 },
    { label: 'item 6', sublabel: 'sublabel of item 6', value: 6 },
    { label: 'item 7', sublabel: 'sublabel of item 7', value: 7 },
    { label: 'item 8 (disabled)', sublabel: 'sublabel of item 8', disabled: true, value: 8 },
    { label: 'item 9', value: 9},
    { label: 'item 10 (preselected)', value: 10 },
    { label: 'item 11', value: 11 },
    { label: 'item 12', value: 12 },
    { label: 'item 13', value: 13 },
    { label: 'item 14', value: 14 },
    { label: 'item 15', value: 15 },
    { label: 'item 16', value: 16 },
    { label: 'item 17', value: 17},
    { label: 'item 19', value: 19 },
    { label: 'item 20', value: 20 },
    { label: 'item 21', value: 21 },
    { label: 'item 22', value: 22 },
    { label: 'item 23', value: 23 },
    { label: 'item 24', value: 24 },
    { label: 'item 25', value: 25 },
    { label: 'item 26', value: 26 },
    { label: 'item 27', value: 27 },
    { label: 'item 28', value: 28 },
    { label: 'item 29', value: 29 },
    { label: 'item 30', value: 30 },
    { label: 'item 31', value: 31 },
    { label: 'item 32', value: 32 },
    { label: 'item 33', value: 33 },
    { label: 'item 34', value: 34 },
    { label: 'item 35', value: 35 },
    { label: 'item 36', value: 36 },
    { label: 'item 37', value: 37 },
    { label: 'item 38', value: 38 },
    { label: 'item 39', value: 39 },
    { label: 'item 40', value: 40 },
    { label: 'item 41', value: 41 },
    { label: 'item 42', value: 42 },
    { label: 'item 43', value: 43 },
    { label: 'item 44', value: 44 },
    { label: 'item 45', value: 45 },
    { label: 'item 46', value: 46 },
    { label: 'item 47', value: 47 },
    { label: 'item 48', value: 48 },
    { label: 'item 49', value: 49 },
    { label: 'item 50', value: 50 },
    { label: 'item 51', value: 51 },
    { label: 'item 52', value: 52 },
    { label: 'item 53', value: 53 },
    { label: 'item 54', value: 54 },
    { label: 'item 55', value: 55 }
  ];

  onSelect(value: any) {
    console.log('onSelect', value);
  }
}
