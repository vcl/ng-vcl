import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  VCLDateRange,
  DateAdapterBase,
  VCLCalendarComponent,
  VCLButtonComponent,
} from '@vcl/ng-vcl';
import { VCLCalendarDateModifier } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  styles: [
    `
      vcl-calendar {
        width: 18em;
      }
    `,
  ],
  imports: [VCLCalendarComponent, VCLButtonComponent],
})
export class CalendarDemoComponent {
  constructor(private dateAdapter: DateAdapterBase<Date>) {}

  date: Date;
  get sdate() {
    return this.dateAdapter.format(this.date, 'date');
  }
  dateRange: VCLDateRange<Date>;
  get sdateRange() {
    if (this.dateAdapter.isRange(this.dateRange)) {
      return (
        this.dateAdapter.format(this.dateRange.start, 'date') +
        ' - ' +
        this.dateAdapter.format(this.dateRange.end, 'date')
      );
    }
    return '-';
  }
  dateArray: Date[] = [];
  get sdateArray() {
    return this.dateArray
      .map(d => this.dateAdapter.format(d, 'date'))
      .join(', ');
  }

  month: Date;
  get smonth() {
    return this.dateAdapter.format(this.month, 'yearMonth');
  }
  monthRange: VCLDateRange<Date>;
  get smonthRange() {
    if (this.dateAdapter.isRange(this.monthRange)) {
      return (
        this.dateAdapter.format(this.monthRange.start, 'yearMonth') +
        ' - ' +
        this.dateAdapter.format(this.monthRange.end, 'yearMonth')
      );
    }
    return '-';
  }
  monthArray: Date[] = [];
  get smonthArray() {
    return this.monthArray
      .map(d => this.dateAdapter.format(d, 'yearMonth'))
      .join(', ');
  }

  today = this.dateAdapter.today();

  available: VCLCalendarDateModifier<Date>[] = [
    {
      // Set vclAvailable class on specific range
      match: {
        start: this.dateAdapter.addDays(this.dateAdapter.today(), 1),
        end: this.dateAdapter.addDays(this.dateAdapter.today(), 14),
      },
      class: 'available',
      view: 'month', // Limit to month view
    },
    {
      // Set vclUnavailable class and disable on specific range
      match: this.dateAdapter.always(), // Still works as first modifier is prioritized
      class: 'unavailable',
      disabled: true,
      view: 'month', // Limit to month view
    },
  ];
}
