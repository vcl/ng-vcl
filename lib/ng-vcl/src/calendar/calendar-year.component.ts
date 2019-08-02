import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { CalendarView, VCLCalendarYear, VCLCalendarBase } from './interfaces';
import { VCLDateAdapter, VCLDateRange } from '../core/index';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'vcl-calendar-year',
  templateUrl: 'calendar-year.component.html',
  exportAs: 'vclCalendarYear',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarYearComponent<VCLDate> implements OnChanges {

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
  viewDateChange = new EventEmitter<VCLDate>();

  @Output()
  selectMonth = new EventEmitter<VCLDate>();

  get calendarYear(): VCLCalendarYear<VCLDate> { return this._calendarYear; }
  set calendarYear(value: VCLCalendarYear<VCLDate>) {
    this._calendarYear = value;
    const groupSize = 3;
    this.groupedMonths = value.months.map((item, index) => {
      return index % groupSize === 0 ? value.months.slice(index, index + groupSize) : null;
    });
  }
  private _calendarYear: VCLCalendarYear<VCLDate>;

  groupedMonths: VCLCalendarBase<VCLDate>[][];

  private updateCalendar() {
    let date = this.viewDate || this.dateAdapter.today();
    if (!this.dateAdapter.isDate(date)) {
      date = this.dateAdapter.today();
    }
    if (!this.calendarYear || !this.dateAdapter.isSameYear(this.calendarYear.date, date)) {
      this.calendarYear = this.calendarService.createCalendarYear(date);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.date || changes.viewDate) {
      if (changes.date && changes.date.currentValue && (!changes.viewDate || !changes.viewDate.currentValue)) {
        this.viewDate = this.dateAdapter.toDate(changes.date.currentValue);
      }
      this.updateCalendar();
    }
  }

  onSelectMonth(date: VCLDate) {
    this.viewDate = date;
    this.viewDateChange.emit(this.viewDate);
    this.selectMonth.emit(this.viewDate);
    this.changeView.emit('month');
  }

  onGoToPrevYear() {
    this.viewDate = this.dateAdapter.addYears(this.calendarYear.date, -1);
    this.viewDateChange.emit(this.viewDate);
  }

  onGoToNextYear() {
    this.viewDate = this.dateAdapter.addYears(this.calendarYear.date, 1);
    this.viewDateChange.emit(this.viewDate);
  }

}
