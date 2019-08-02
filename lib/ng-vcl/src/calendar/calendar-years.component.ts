import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Inject, SimpleChanges, OnChanges } from '@angular/core';
import { VCLDateAdapter, VCLDateRange } from '../core/index';
import { CalendarView, VCLCalendarYears, VCLCalendarBase } from './interfaces';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'vcl-calendar-years',
  templateUrl: 'calendar-years.component.html',
  exportAs: 'vclCalendarYear',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarYearsComponent<VCLDate> implements OnChanges {

  constructor(
    private dateAdapter: VCLDateAdapter<VCLDate>,
    private calendarService: CalendarService<VCLDate>,
  ) { }

  @Input()
  date?: VCLDate | VCLDateRange<VCLDate>;

  @Input()
  viewDate: VCLDate;

  @Output()
  changeView = new EventEmitter<CalendarView>();

  @Output()
  selectYear = new EventEmitter<VCLDate>();

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  get calendarYears(): VCLCalendarYears<VCLDate> {
    return this._calendarYears;
  }
  set calendarYears(value: VCLCalendarYears<VCLDate>) {
    this._calendarYears = value;
    const groupSize = 5;
    this.groupedYears = value.years.map((item, index) => {
      return index % groupSize === 0 ? value.years.slice(index, index + groupSize) : null;
    });
  }
  private _calendarYears: VCLCalendarYears<VCLDate>;
  groupedYears: VCLCalendarBase<VCLDate>[][];


  private updateCalendar() {
    let date = this.viewDate || this.dateAdapter.today();
    if (!this.dateAdapter.isDate(date)) {
      date = this.dateAdapter.today();
    }
    this.calendarYears = this.calendarService.createCalendarYears(date);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.date || changes.viewDate) {
      if (changes.date && changes.date.currentValue && (!changes.viewDate || !changes.viewDate.currentValue)) {
        this.viewDate = this.dateAdapter.toDate(changes.date.currentValue);
      }
      this.updateCalendar();
    }
  }

  onSelectYear(date: VCLDate) {
    this.viewDate = date;
    this.viewDateChange.emit(this.viewDate);
    this.selectYear.emit(this.viewDate);
    this.changeView.emit('year');
  }

  onGoToPrevYears() {
    this.viewDate = this.dateAdapter.addYears(this.calendarYears.date, -(this.calendarYears.years.length - 1 / 2));
    this.viewDateChange.emit(this.viewDate);
    this.updateCalendar();
  }

  onGoToNextYears() {
    this.viewDate = this.dateAdapter.addYears(this.calendarYears.date, (this.calendarYears.years.length - 1 / 2));
    this.viewDateChange.emit(this.viewDate);
    this.updateCalendar();
  }
}
