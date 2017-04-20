import { Component } from '@angular/core';

@Component({
  selector: 'month-picker',
  templateUrl: 'demo.component.html',
})
export class MonthPickerDemoComponent {

  expanded: boolean = false;

  thisYear: number = new Date().getUTCFullYear();

  currentYear: number = this.thisYear;

  prevYearAvailable: boolean = true;

  nextYearAvailable: boolean = false;

  dateOptions: any = {
    month: 'long'
  };

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

