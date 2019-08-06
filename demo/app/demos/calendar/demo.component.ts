import { Component } from '@angular/core';
import { VCLDateRange, VCLDateAdapter } from '@ng-vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html'
})
export class CalendarDemoComponent {
  constructor(private dateAdapter: VCLDateAdapter<Date>) { }

  date: Date;
  dateRange: VCLDateRange<Date>;
  dateArray: Date[];

  month: Date;
  monthRange: VCLDateRange<Date>;
  monthArray: Date[];

  today = this.dateAdapter.today();

  viewDate = new Date(2019, 2, 1);

  available = {
    start: new Date(2019, 2, 1),
    end: new Date(2019, 2, 31),
  };

  unavailable = this.dateAdapter.always();
}
