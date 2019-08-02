import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { VCLDateAdapter, VCLDateRange } from '../core/index';
import { CalendarView, VCLCalendarMonth, VCLCalendarDay } from './interfaces';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'vcl-calendar-month',
  templateUrl: 'calendar-month.component.html',
  exportAs: 'vclCalendarMonth',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarMonthComponent<VCLDate> implements OnChanges {

  constructor(
    private dateAdapter: VCLDateAdapter<VCLDate>,
    private calendarService: CalendarService<VCLDate>,
  ) { }

  @Input()
  showWeekOfTheYear = false;

  @Input()
  date?: VCLDate | VCLDateRange<VCLDate>;

  @Input()
  viewDate: VCLDate;

  @Input()
  available?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  unavailable?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  minDate?: VCLDate;

  @Input()
  maxDate?: VCLDate;

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  @Output()
  changeView = new EventEmitter<CalendarView>();

  @Output()
  dateChange = new EventEmitter<VCLDate>();

  calendarMonth: VCLCalendarMonth<VCLDate>;
  weekdayLabels = this.dateAdapter.getDayOfWeekNames();

  private updateCalendar() {
    let date = this.viewDate || this.dateAdapter.today();
    if (!this.dateAdapter.isDate(date)) {
      date = this.dateAdapter.today();
    }

    this.calendarMonth = this.calendarService.createCalendarMonth(date, {
      selectedDate: this.date,
      available: this.available,
      unavailable: this.unavailable,
      min: this.minDate,
      max: this.maxDate,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.date || changes.viewDate || changes.minDate || changes.maxDate) {
      if (changes.date && changes.date.currentValue && (!changes.viewDate || !changes.viewDate.currentValue)) {
        this.viewDate = this.dateAdapter.toDate(changes.date.currentValue);
      }
      this.updateCalendar();
    }
  }

  onGoToPrevMonth() {
    this.viewDate = this.dateAdapter.addMonths(this.calendarMonth.date, -1);
    this.updateCalendar();
    this.viewDateChange.emit(this.viewDate);
  }

  onGoToNextMonth() {
    this.viewDate = this.dateAdapter.addMonths(this.calendarMonth.date, 1);
    this.viewDateChange.emit(this.viewDate);
    this.updateCalendar();
  }

  onSelectDay(day: VCLCalendarDay<VCLDate>) {
    if (!day.disabled) {
      this.date = day.date;
      this.updateCalendar();
      this.dateChange.emit(this.date);
    }
  }
}
