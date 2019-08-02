import { Component, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { VCLDateAdapter, VCLDateRange } from '../core/index';
import { CalendarView } from './interfaces';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'vcl-calendar',
  templateUrl: 'calendar.component.html',
  exportAs: 'vclCalendar',
  providers: [CalendarService]
})

export class CalendarComponent<VCLDate> {
  constructor(
    private dateAdapter: VCLDateAdapter<VCLDate>,
    private cdRef: ChangeDetectorRef
  ) { }

  @Input()
  date?: VCLDate | VCLDateRange<VCLDate>;

  @Input()
  available?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  unavailable?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  viewDate?: VCLDate;

  @Input()
  view: CalendarView = 'month';

  @Input()
  minDate?: VCLDate;

  @Input()
  maxDate?: VCLDate;

  @Output()
  dateChange = new EventEmitter<VCLDate | VCLDateRange<VCLDate>>();

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  @Output()
  viewChange = new EventEmitter<CalendarView>();

  onChangeView(view: CalendarView) {
    this.view = view;
    this.viewChange.emit(view);
  }

  onViewDateChange(date: VCLDate) {
    this.viewDate = date;
    this.viewDateChange.emit(date);
  }

  onSelectYear(date: VCLDate) {
    this.viewDate = date;
    this.view = 'year';
    this.viewChange.emit(this.view);
    this.viewDateChange.emit(date);
  }

  onSelectMonth(date: VCLDate) {
    this.viewDate = date;
    this.view = 'month';
    this.viewChange.emit(this.view);
    this.viewDateChange.emit(date);
  }

  onSelectDay(date: VCLDate) {
    this.viewDate = date;
    this.date = date;
    this.viewChange.emit(this.view);
    this.dateChange.emit(date);
    this.viewDateChange.emit(date);
  }

  setView(view: CalendarView) {
    this.view = view;
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }

  setViewDate(date?: VCLDate) {
    this.viewDate = date || this.dateAdapter.today();
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }

  setDate(date: VCLDate | VCLDateRange<VCLDate>) {
    this.date = date;
    this.viewDate = date ? this.dateAdapter.toDate(date) : this.dateAdapter.today();
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }
}
