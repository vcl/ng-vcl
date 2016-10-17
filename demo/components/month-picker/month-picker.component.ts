import { Component } from '@angular/core';

@Component({
  selector: 'month-picker',
  templateUrl: 'month-picker.component.html',
})
export class MonthPickerComponent {

  constructor() { }

  expanded: boolean = false;

  prevYearAvailable: boolean = true;

  nextYearAvailable: boolean = true;

  ngOnInit() { }

  expandMonthPicker() {
    this.expanded = !this.expanded;
  }

  onSelect(date: string) {
    console.log('onSelect():', date);
  }

  onPreviousYearTap() {
    console.log('onPreviousYearTap()');
  }

  onNextYearTap() {
    console.log('onNextYearTap()');
  }
}

