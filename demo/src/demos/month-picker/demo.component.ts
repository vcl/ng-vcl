import { Component, ViewChild } from '@angular/core';
import { MonthPickerComponent } from '@ng-vcl/ng-vcl';

@Component({
  selector: 'month-picker',
  templateUrl: 'demo.component.html',
})
export class MonthPickerDemoComponent {

  @ViewChild('myStyledMonthPicker') styledMonthPicker: MonthPickerComponent;

  expanded: boolean = false;

  thisYear: number = new Date().getUTCFullYear();

  currentYear: number = this.thisYear;

  prevYearAvailable: boolean = true;

  nextYearAvailable: boolean = false;

  locales: string = 'lv-LV';

  dateOptions: any = {
    month: 'long'
  };
  min = new Date();
  max = new Date(2019, 1, 1);
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

