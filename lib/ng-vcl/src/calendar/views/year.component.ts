import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { VCLCalendarYear } from '../interfaces';
import { VCLDateAdapter, VCLDateRange } from '../../dateadapter/index';
import { compare } from '../utils';

@Component({
  selector: 'vcl-calendar-view-year',
  templateUrl: 'year.component.html',
  exportAs: 'vclCalendarViewYear',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarViewYearComponent<VCLDate> implements OnChanges, OnInit {

  constructor(
    private dateAdapter: VCLDateAdapter<VCLDate>,
  ) { }

  @Input()
  disabled = false;

  @Input()
  value?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  viewDate: VCLDate;

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  @Output()
  valueChange = new EventEmitter<VCLDate>();

  @Output()
  labelClick = new EventEmitter<any>();

  calendar: VCLCalendarYear<VCLDate>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value || changes.viewDate) {
      if (changes.value && changes.value.currentValue && (!this.viewDate)) {
        this.viewDate = this.dateAdapter.toDate(changes.value.currentValue);
      }
      this.updateCalendarYear();
    }
  }

  ngOnInit() {
    if (!this.calendar) {
      this.updateCalendarYear();
    }
  }

  onLabelClick() {
    this.labelClick.emit();
  }

  onSelectMonth(date: VCLDate) {
    if (this.disabled) {
      return;
    }

    this.value = date;
    this.valueChange.emit(date);
  }

  onGoToPrevYear() {
    this.viewDate = this.dateAdapter.addYears(this.calendar.date, -1);
    this.viewDateChange.emit(this.viewDate);
  }

  onGoToNextYear() {
    this.viewDate = this.dateAdapter.addYears(this.calendar.date, 1);
    this.viewDateChange.emit(this.viewDate);
  }

  updateCalendarYear() {
    let viewDate = this.viewDate || this.dateAdapter.today();
    if (!this.dateAdapter.isDate(viewDate)) {
      viewDate = this.dateAdapter.today();
    }

    const months = Array.from(Array(12).keys()).map(i => {
      const monthDate = this.dateAdapter.createDate(this.dateAdapter.getYear(viewDate), i, 1);
      return {
        label: this.dateAdapter.format(monthDate, 'month'),
        date: monthDate,
        isCurrentMonth: this.dateAdapter.isSameMonth(this.dateAdapter.today(), monthDate),
        selected: compare(this.dateAdapter, this.value, monthDate, 'month')
      };
    });
    this.calendar = {
      date: viewDate,
      months: months.map((item, index) => {
        return index % 3 === 0 ? months.slice(index, index + 3) : null;
      }),
      label: this.dateAdapter.format(viewDate, 'year'),
    };
  }

}
