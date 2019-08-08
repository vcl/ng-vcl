import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { VCLCalendarYear, VCLCalendarDateModifier, VCLCalendarMonth, VCLCalendarYearMonth } from '../interfaces';
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

  @Input()
  dateModifiers?: VCLCalendarDateModifier<VCLDate>[];

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

  onSelectMonth(month: VCLCalendarYearMonth<VCLDate>) {
    if (this.disabled || month.disabled) {
      return;
    }

    this.value = month.date;
    this.valueChange.emit(month.date);
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

    const compareMonth = this.dateAdapter.compareMonth.bind(this.dateAdapter);

    const months = Array.from(Array(12).keys()).map(i => {
      const monthDate = this.dateAdapter.createDate(this.dateAdapter.getYear(viewDate), i, 1);

      const dateModifier = !!Array.isArray(this.dateModifiers) && this.dateModifiers.find(_dm => {
        return (!_dm.view || _dm.view === 'year') && !!compare(this.dateAdapter, _dm.match, monthDate, compareMonth);
      });

      const dateClass = dateModifier ? dateModifier.class : undefined;
      const disabled = !!dateModifier && !!dateModifier.disabled;

      return {
        label: this.dateAdapter.format(monthDate, 'month'),
        date: monthDate,
        isCurrentMonth: this.dateAdapter.isSameMonth(this.dateAdapter.today(), monthDate),
        selected: compare(this.dateAdapter, this.value, monthDate, compareMonth),
        class: dateClass,
        disabled
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
