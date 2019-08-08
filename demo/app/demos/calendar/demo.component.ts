import { Component } from '@angular/core';
import { VCLDateRange, VCLDateAdapter } from '@ng-vcl/ng-vcl';
import { VCLCalendarDateModifier } from '@ng-vcl/ng-vcl/calendar/interfaces';

@Component({
  templateUrl: 'demo.component.html',
  styles: [`
  vcl-calendar {
    width: 18em;
  }
  `]
})
export class CalendarDemoComponent {
  constructor(private dateAdapter: VCLDateAdapter<Date>) { }

  date: Date;
  dateRange: VCLDateRange<Date>;
  dateArray: Date[];

  month: Date;
  monthRange: VCLDateRange<Date>;
  monthArray: Date[];

  available: VCLCalendarDateModifier<Date>[] = [
    {
      // Set vclAvailable class on specific range
      match: {
        start: this.dateAdapter.addDays(this.dateAdapter.today(), 1),
        end: this.dateAdapter.addDays(this.dateAdapter.today(), 14),
      },
      class: 'vclAvailable',
      view: 'month' // Limit to month view
    }, {
      // Set vclUnavailable class and disable on specific range
      match: this.dateAdapter.always(), // Still works as first modifier is prioritized
      class: 'vclUnavailable',
      disabled: true,
      view: 'month' // Limit to month view
    }
  ];
}
