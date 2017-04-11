import { Component, ViewChild } from '@angular/core';
import { MonthPickerComponent as _MonthPickerComponent } from '../../../src/ng-vcl/month-picker/month-picker.component';

@Component({
  selector: 'month-picker',
  templateUrl: 'month-picker.component.html',
})
export class MonthPickerComponent {

  @ViewChild('myStyledMonthPicker') styledMonthPicker: _MonthPickerComponent;

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
}

