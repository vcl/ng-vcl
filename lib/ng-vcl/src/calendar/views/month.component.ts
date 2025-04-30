import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { DateAdapterBase, VCLDateRange } from '../../dateadapter/index';
import {
  VCLCalendarMonth,
  VCLCalendarDay,
  VCLCalendarDateModifier,
} from '../interfaces';
import { VCLCalendarWeek } from '../interfaces';
import { compare } from '../utils';
import { VCLIconModule } from '@vcl/ng-vcl/icon';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from '@vcl/ng-vcl/button';

@Component({
  selector: 'vcl-calendar-view-month',
  templateUrl: 'month.component.html',
  exportAs: 'vclCalendarViewMonth',
  imports: [VCLIconModule, CommonModule, VCLButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarViewMonthComponent<VCLDate> implements OnChanges, OnInit {
  constructor(private dateAdapter: DateAdapterBase<VCLDate>) {}

  @Input()
  showWeekOfTheYear = false;

  @Input()
  value?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Input()
  viewDate: VCLDate;

  @Input()
  dateModifiers?: VCLCalendarDateModifier<VCLDate>[];

  @Input()
  disabled?: boolean;

  @Output()
  viewDateChange = new EventEmitter<VCLDate>();

  @Output()
  valueChange = new EventEmitter<VCLDate | VCLDateRange<VCLDate>>();

  @Output()
  labelClick = new EventEmitter<any>();

  calendar: VCLCalendarMonth<VCLDate>;
  weekdayLabels = this.dateAdapter.getDayOfWeekNames();

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.value ||
      changes.viewDate ||
      changes.dateModifiers ||
      changes.disabled
    ) {
      if (changes.value && changes.value.currentValue && !this.viewDate) {
        this.viewDate = this.dateAdapter.toDate(changes.value.currentValue);
      }
      this.updateCalendarMonth();
    }
  }

  ngOnInit() {
    if (!this.calendar) {
      this.updateCalendarMonth();
    }
  }

  onLabelClick() {
    this.labelClick.emit();
  }

  onGoToPrevMonth() {
    this.viewDate = this.dateAdapter.addMonths(this.calendar.date, -1);
    this.updateCalendarMonth();
    this.viewDateChange.emit(this.viewDate);
  }

  onGoToNextMonth() {
    this.viewDate = this.dateAdapter.addMonths(this.calendar.date, 1);
    this.viewDateChange.emit(this.viewDate);
    this.updateCalendarMonth();
  }

  onSelectDay(day: VCLCalendarDay<VCLDate>) {
    if (this.disabled || day.disabled) {
      return;
    }
    this.value = day.date;
    this.updateCalendarMonth();
    this.valueChange.emit(this.value);
  }

  updateCalendarMonth() {
    let date = this.viewDate || this.dateAdapter.today();
    if (!this.dateAdapter.isDate(date)) {
      date = this.dateAdapter.today();
    }

    const weeks: VCLCalendarWeek<VCLDate>[] = [];

    const daysInMonth = this.dateAdapter.getDaysInMonth(date);

    const beginWeekday = this.dateAdapter.getFirstWeekdayOfMonth(date);
    const lastWeekday = this.dateAdapter.getLastWeekdayOfMonth(date);

    // Calculate days of prev month shown in the first week
    let leakingDaysBefore = beginWeekday - this.dateAdapter.weekDayOffset;
    // Check for negative numbers
    leakingDaysBefore =
      leakingDaysBefore < 0
        ? this.dateAdapter.daysPerWeek + leakingDaysBefore
        : leakingDaysBefore;
    // Calculate days of next month shown in the last week
    let leakingDaysAfter =
      this.dateAdapter.daysPerWeek -
      lastWeekday -
      1 +
      this.dateAdapter.weekDayOffset;
    // Strip if its a whole week
    leakingDaysAfter = leakingDaysAfter % this.dateAdapter.daysPerWeek;

    let days: VCLCalendarDay<VCLDate>[];
    let week: VCLCalendarWeek<VCLDate>;

    for (
      let dayInMonth = 1 - leakingDaysBefore, dayInWeek = 0;
      dayInMonth <= daysInMonth + leakingDaysAfter;
      dayInMonth++
    ) {
      if (!week || !days) {
        const weekDate = this.dateAdapter.createDate(
          this.dateAdapter.getYear(date),
          this.dateAdapter.getMonth(date),
          dayInMonth
        );
        days = [];
        week = {
          date: weekDate,
          days,
          label: this.dateAdapter.getWeekOfTheYear(weekDate).toString(),
        };
      }

      const compareDate = this.dateAdapter.compareDate.bind(this.dateAdapter);

      const inMonth = dayInMonth >= 1 && dayInMonth <= daysInMonth;
      const dayDate = this.dateAdapter.createDate(
        this.dateAdapter.getYear(date),
        this.dateAdapter.getMonth(date),
        dayInMonth
      );

      const dateModifier =
        !!Array.isArray(this.dateModifiers) &&
        this.dateModifiers.find(_dm => {
          return (
            (!_dm.view || _dm.view === 'month') &&
            !!compare(this.dateAdapter, _dm.match, dayDate, compareDate)
          );
        });

      const dateClass = dateModifier ? dateModifier.class : undefined;
      const disabled = !!dateModifier && !!dateModifier.disabled;

      let selected = compare(
        this.dateAdapter,
        this.value,
        dayDate,
        compareDate
      );
      // Disabled days cannot be selected
      if (disabled && selected) {
        selected = false;
      }

      days.push({
        date: dayDate,
        inMonth,
        label: this.dateAdapter.format(dayDate, 'day'),
        selected,
        disabled,
        class: dateClass,
        isToday:
          this.dateAdapter.compareDate(dayDate, this.dateAdapter.today()) === 0,
      });

      if (dayInWeek === this.dateAdapter.daysPerWeek - 1) {
        weeks.push(week);
        week = undefined;
        days = undefined;
        dayInWeek = 0;
      } else {
        dayInWeek++;
      }
    }

    this.calendar = {
      date,
      label: this.dateAdapter.format(date, 'month'),
      yearAndMonthLabel: this.dateAdapter.format(date, 'yearMonthLong'),
      weeks,
    };
  }
}
