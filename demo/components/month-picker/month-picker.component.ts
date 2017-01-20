import { Component } from '@angular/core';

@Component({
  selector: 'month-picker',
  templateUrl: 'month-picker.component.html',
})
export class MonthPickerComponent {

  expanded: boolean = false;

  thisYear: number = new Date().getUTCFullYear();

  currentYear: number = this.thisYear;

  prevYearAvailable: boolean = true;

  nextYearAvailable: boolean = false;

  locales: string = 'lv-LV';

  dateOptions: any = {
    month: 'long'
  };

  constructor() { }

  ngOnInit() { }

  expandMonthPicker() {
    this.expanded = !this.expanded;
  }

  onSelect(date: string) {
    console.log('onSelect():', date);
  }

  onPreviousYearTap() {
    console.log('onPreviousYearTap()');
    console.log('this.currentYear:', this.currentYear);
    if (this.currentYear < this.thisYear) {
      this.nextYearAvailable = true;
    }
  }

  onNextYearTap() {
    console.log('onNextYearTap()');
    console.log('this.currentYear:', this.currentYear);
    if (this.currentYear === this.thisYear) {
      this.nextYearAvailable = false;
    }
  }
}

