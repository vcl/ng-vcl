import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MonthPickerComponent } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
})
export class MonthPickerDemoComponent implements AfterViewInit {

  @ViewChild('myStyledMonthPicker', { static: false }) styledMonthPicker: MonthPickerComponent;

  expanded = false;

  thisYear: number = new Date().getUTCFullYear();

  currentYear: number = this.thisYear;

  prevYearAvailable = true;

  nextYearAvailable = false;

  locales = 'en-us';

  dateOptions: any = {
    month: 'long'
  };

  selectedMonth = new Date(2018, 1);

  min = new Date();
  max = new Date(2019, 1, 1);
  constructor() { }

  ngAfterViewInit() {
    const now: Date = new Date();
    this.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), 'pink');

    now.setMonth(now.getMonth() - 1);
    this.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), 'black');
    this.styledMonthPicker.dePreselectMonth(now.getFullYear(), now.getMonth());
  }

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

  btn() {
    this.selectedMonth = new Date(2018, 4);
  }
}

