import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'vcl-month-selector',
  templateUrl: 'month-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthSelectorComponent implements OnInit {
  months: any[];
  yearMeta: any = {};
  currentMeta: any[];
  availableColors: string[];

  ngOnInit(): void {
    // TODO: Localize here instead of in the template so outside components
    // when calling month-picker.getMonth(month) get calendar's localized and used label.
    this.months = (this.useShortNames ? MonthSelectorComponent.monthNamesShort :
      MonthSelectorComponent.monthNames).map(month => ({
        label: month
      }));

    this.setMinDate();
    this.setMaxDate();
  }

  private setMinDate() {
    let dateSplit: string[] = this.minDate.split('.');
    this.minYear = Number.parseInt(dateSplit[0]);
    this.minYearMonth = Number.parseInt(dateSplit[1]);
  }

  private setMaxDate() {
    let dateSplit: string[] = this.maxDate.split('.');
    this.maxYear = Number.parseInt(dateSplit[0]);
    this.maxYearMonth = Number.parseInt(dateSplit[1]);
  }

  @Input()
  prevMonthBtnIcon: string = "fa:chevron-left";

  @Input()
  nextMonthBtnIcon: string = "fa:chevron-right";

  @Input()
  closeBtnIcon: string = "fa:times";

  @Input()
  expandable: boolean = false;

  @Input()
  expanded: boolean = true;
  @Output()
  expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  currentYear: number = new Date().getUTCFullYear();
  @Output()
  currentYearChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  currentMonth: number = new Date().getUTCMonth();
  @Output()
  currentMonthChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  minDate: string = `${this.currentYear}.0`;

  minYear: number;

  minYearMonth: number;

  @Input()
  maxDate: string = `${this.currentYear}.this.currentMonth`;

  maxYear: number;

  maxYearMonth: number;

  @Input()
  useShortNames: boolean = false;

  prevMonthAvailable: boolean = false;

  @Output()
  prevMonthBtnTap = new EventEmitter();

  nextMonthAvailable: boolean = false;

  @Output()
  nextMonthBtnTap = new EventEmitter();

  @Input()
  tabindex: number = 0;

  private onPrevMonthTap(): void {
    if (this.prevMonthAvailable) {
      this.currentYear--;
      this.currentYearChange.emit(this.currentYear);
      this.prevMonthBtnTap.emit();
    }
  }

  private isPrevMonthAvailalbe(): boolean {
    return false;
  }

  private onNextMonthTap(): void {
    if (this.nextMonthAvailable) {
      this.currentYear++;
      this.currentYearChange.emit(this.currentYear);
      this.nextMonthBtnTap.emit();
    }
  }

  private isNextMonthAvailalbe(): boolean {
    return false;
  }

  private onCloseBtnTap(): void {
    if (this.expandable) {
      if (this.expanded) {
        this.expanded = false;
        this.expandedChange.emit(this.expanded);
      }
    }
  }

  isCurrentMonth(month: number, year: number = this.currentYear): boolean {
    const now: Date = new Date();
    return now.getFullYear() == year && now.getUTCMonth() === month;
  }

  static monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  static monthNamesShort: string[] = MonthSelectorComponent.monthNames
    .map(name => name.substr(0, 3));
}
