import { Component, Input, EventEmitter, Output, HostBinding, Inject, OnInit } from '@angular/core';
import { VCLDateRange } from '../dateadapter/index';
import { VCLCalendarView, VCLCalendarDateModifier } from './interfaces';

export abstract class VCLCalendarHandler<VCLDate> {
  abstract readonly mode: string;
  abstract init(calendar: CalendarComponent<VCLDate>): void;
  abstract handleValueChange(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView, date: VCLDate): void;
  abstract handleViewDateChange(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView, viewDate: VCLDate): void;
  abstract handleLabelClick(calendar: CalendarComponent<VCLDate>, source: VCLCalendarView): void;
}

export type VCLCalendarSelectionMode = 'date' | 'multiple' | 'range' | 'month' | 'month-multiple' | 'month-range';

@Component({
  selector: 'vcl-calendar',
  templateUrl: 'calendar.component.html',
  exportAs: 'vclCalendar'
})
export class CalendarComponent<VCLDate> implements OnInit {
  constructor(
    @Inject(VCLCalendarHandler)
    private handlers: VCLCalendarHandler<VCLDate>[],
  ) { }

  @HostBinding('class.vclDataGrid')
  @HostBinding('class.vclDGVAlignMiddle')
  @HostBinding('class.vclDGAlignCentered')
  @HostBinding('class.vclCalendar')
  @HostBinding('class.vclCalInput')
  _calendarHostClasses = true;

  view: VCLCalendarView = 'month';

  handler?: VCLCalendarHandler<VCLDate>;

  @Input()
  value?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  viewDate?: VCLDate;

  @Input()
  dateModifiers?: VCLCalendarDateModifier<VCLDate>[];

  @Input()
  disabled = false;

  @Input()
  showWeekOfTheYear = false;

  @Input()
  minDate?: VCLDate;

  @Input()
  maxDate?: VCLDate;

  @Output()
  valueChange = new EventEmitter<VCLDate | VCLDate[] | VCLDateRange<VCLDate>>();

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  @Input()
  selectionMode: VCLCalendarSelectionMode | string = 'date';

  onViewDateChange(source: VCLCalendarView, viewDate: VCLDate) {
    this.handler.handleViewDateChange(this, source, viewDate);
  }

  onValueChange(source: VCLCalendarView, date: VCLDate) {
    this.handler.handleValueChange(this, source, date);
  }

  ngOnInit(): void {
    this.handler = this.handlers.find(handler => handler.mode === this.selectionMode);
    if (!this.handler) {
      throw new Error('No CalendarHandler found for ' + this.selectionMode);
    }

    this.handler.init(this);
  }

  onLabelClick(source: VCLCalendarView) {
    this.handler.handleLabelClick(this, source);

  }
}
