import {
  Component,
  Input,
  EventEmitter,
  Output,
  HostBinding,
  Inject,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { VCLDateRange } from '../dateadapter/index';
import {
  VCLCalendarView,
  VCLCalendarDateModifier,
  VCLCalendarHandler,
  VCLCalendar,
} from './interfaces';

export type VCLCalendarSelectionMode =
  | 'date'
  | 'multiple'
  | 'range'
  | 'month'
  | 'month-multiple'
  | 'month-range';

@Component({
    selector: 'vcl-calendar',
    templateUrl: 'calendar.component.html',
    exportAs: 'vclCalendar',
    standalone: false
})
export class CalendarComponent<VCLDate>
  implements OnInit, ControlValueAccessor, VCLCalendar<VCLDate>
{
  constructor(
    @Inject(VCLCalendarHandler)
    private handlers: VCLCalendarHandler<VCLDate>[],
    private cdRef: ChangeDetectorRef
  ) {}

  @HostBinding('class.data-grid')
  @HostBinding('class.d-g-v-align-middle')
  @HostBinding('class.d-g-align-centered')
  @HostBinding('class.calendar')
  @HostBinding('class.cal-input')
  _calendarHostClasses = true;

  view: VCLCalendarView = 'month';
  cvaDisabled = false;
  handler?: VCLCalendarHandler<VCLDate>;

  @Input()
  value: VCLDate | VCLDate[] | VCLDateRange<VCLDate> | undefined;

  @Input()
  viewDate?: VCLDate;

  @Input()
  dateModifiers?: VCLCalendarDateModifier<VCLDate>[];

  @Input()
  disabled = false;

  @Input()
  maxSelectableDates?: number;

  @Input()
  showWeekOfTheYear = false;

  @Output()
  valueChange = new EventEmitter<VCLDate | VCLDate[] | VCLDateRange<VCLDate>>();

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  @Input()
  selectionMode: VCLCalendarSelectionMode | string = 'date';

  get isDisabled() {
    return this.disabled || this.cvaDisabled;
  }

  onViewDateChange(source: VCLCalendarView, viewDate: VCLDate) {
    this.handler.handleViewDateChange(this, source, viewDate);
  }

  onValueChange(source: VCLCalendarView, date: VCLDate) {
    this.handler.handleValueChange(this, source, date);
    this.onTouched();
  }

  ngOnInit(): void {
    this.handler = this.handlers.find(
      handler => handler.mode === this.selectionMode
    );
    if (!this.handler) {
      throw new Error('No CalendarHandler found for ' + this.selectionMode);
    }

    this.handler.init(this);
  }

  onLabelClick(source: VCLCalendarView) {
    this.handler.handleLabelClick(this, source);
  }

  setValue(
    value: VCLDate | VCLDate[] | VCLDateRange<VCLDate>,
    propagate: boolean
  ): void {
    this.value = value;
    if (propagate) {
      this.valueChange.emit(this.value);
    }
  }

  setViewDate(viewDate: VCLDate, propagate: boolean): void {
    this.viewDate = viewDate;
    if (propagate) {
      this.viewDateChange.emit(this.viewDate);
    }
  }

  setView(view: VCLCalendarView): void {
    this.view = view;
  }

  // cva implementation

  onChange: (value) => void = _ => null;
  onTouched: () => void = () => null;

  writeValue(value: any): void {
    this.value = value;
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.cvaDisabled = isDisabled;
  }
}
