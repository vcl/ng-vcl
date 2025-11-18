import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
  OnInit,
} from '@angular/core';
import { DateAdapterBase, VCLDateRange } from '../../dateadapter/index';
import { VCLCalendarYears } from '../interfaces';
import { compare } from '../utils';
import { CommonModule } from '@angular/common';

import { VCLIconModule } from '../../icon/index';
import {VCLButtonModule} from '../../button/index';

@Component({
  selector: 'vcl-calendar-view-years',
  templateUrl: 'years.component.html',
  exportAs: 'vclCalendarViewYear',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VCLIconModule, CommonModule, VCLButtonModule],
})
export class VCLCalendarViewYearsComponent<VCLDate> implements OnChanges, OnInit {
  constructor(private dateAdapter: DateAdapterBase<VCLDate>) {}

  @Input()
  disabled = false;

  @Input()
  value?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  viewDate: VCLDate;

  @Output()
  valueChange = new EventEmitter<VCLDate>();

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  calendar: VCLCalendarYears<VCLDate>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value || changes.viewDate) {
      if (changes.value && changes.value.currentValue && !this.viewDate) {
        this.viewDate = this.dateAdapter.toDate(changes.value.currentValue);
      }
      this.updateCalendarYears();
    }
  }

  ngOnInit() {
    if (!this.calendar) {
      this.updateCalendarYears();
    }
  }

  onSelectYear(date: VCLDate) {
    if (this.disabled) {
      return;
    }
    this.value = date;
    this.valueChange.emit(this.value);
  }

  onGoToPrevYears() {
    this.viewDate = this.dateAdapter.addYears(
      this.calendar.date,
      -(this.calendar.years.length - 1 / 2)
    );
    this.viewDateChange.emit(this.viewDate);
    this.updateCalendarYears();
  }

  onGoToNextYears() {
    this.viewDate = this.dateAdapter.addYears(
      this.calendar.date,
      this.calendar.years.length - 1 / 2
    );
    this.viewDateChange.emit(this.viewDate);
    this.updateCalendarYears();
  }

  updateCalendarYears() {
    let viewDate = this.viewDate || this.dateAdapter.today();
    if (!this.dateAdapter.isDate(viewDate)) {
      viewDate = this.dateAdapter.today();
    }

    const compareYear = this.dateAdapter.compareYear.bind(this.dateAdapter);

    const years = Array.from(Array(25).keys()).map(i => {
      const yearDate = this.dateAdapter.createDate(
        this.dateAdapter.getYear(viewDate) + (i - 12),
        0,
        1
      );
      return {
        label: this.dateAdapter.format(yearDate, 'year'),
        date: yearDate,
        isCurrentYear: this.dateAdapter.isSameYear(
          this.dateAdapter.today(),
          yearDate
        ),
        selected: compare(this.dateAdapter, this.value, yearDate, compareYear),
      };
    });

    const yearStartLabel = this.dateAdapter.format(years[0].date, 'year');

    const yearEndLabel = this.dateAdapter.format(
      years[years.length - 1].date,
      'year'
    );

    this.calendar = {
      date: viewDate,
      years: years.map((_, index) => {
        return index % 5 === 0 ? years.slice(index, index + 5) : null;
      }),
      label: `${yearStartLabel} - ${yearEndLabel}`,
    };
  }
}
