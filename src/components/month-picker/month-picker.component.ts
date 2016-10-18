import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'vcl-month-picker',
  templateUrl: 'month-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerComponent implements OnInit {
  months: any[];
  yearMeta: any = {};
  currentMeta: any[];
  availableColors: string[];

  ngOnInit(): void {
    this.months = (this.useShortNames ? MonthPickerComponent.monthNamesShort :
      MonthPickerComponent.monthNames).map(month => ({
        label: month
      }));

    if (!this.maxSelectableItems) {
      this.maxSelectableItems = this.colors && this.colors.length || 1;
    }

    if (this.colors) {
      this.availableColors = this.colors.slice();
    }

    this.setYearMeta(this.currentYear);
  }

  private setYearMeta(year: number): void {
    if (!this.yearMeta[year]) {
      this.yearMeta[year] = this.createYearMeta(year);
    }
    this.currentMeta = this.yearMeta[year];
  }

  private createYearMeta(year: number): any[] {
    return this.months.map(monthMeta => new Object());
  }

  @Input()
  prevYearBtnIcon: string = "fa:chevron-left";

  @Input()
  nextYearBtnIcon: string = "fa:chevron-right";

  @Input()
  closeBtnIcon: string = "fa:times";

  @Input()
  monthsPerRow: number = 3;

  @Input()
  expandable: boolean = false;

  @Input()
  expanded: boolean = true;
  @Output()
  expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  maxYear: number = Number.MAX_SAFE_INTEGER;

  @Input()
  currentYear: number = new Date().getUTCFullYear();
  @Output()
  currentYearChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  useShortNames: boolean = false;

  @Input()
  useAvailableMonths: boolean = false;

  @Input()
  colors: string[] = null;

  @Input()
  maxSelectableItems: number;

  @Input()
  minSelectableItems: number = 1;

  @Input()
  prevYearAvailable: boolean = false;

  @Input()
  nextYearAvailable: boolean = false;

  @Output()
  prevYearBtnTap = new EventEmitter();

  @Output()
  nextYearBtnTap = new EventEmitter();

  @Output()
  select = new EventEmitter<string>();
  @Output()
  deselect = new EventEmitter<string>();

  @Input()
  tabindex: number = 0;

  selectMonth(month: number, year: number = this.currentYear): void {
    if (!this.isMonthAvailable(month, year)) {
      return;
    }

    const monthMeta: any = this.getYearMeta(year)[month];
    if (monthMeta.selected) {
      return this.deselectMonth(month, year);
    }

    if (this.maxSelectableItems === 1) {
      this.iterateMonthMetas((month, year, mMeta) => {
        mMeta.selected = mMeta === monthMeta;
      });
    } else if (this.getSelectedDates().length < this.maxSelectableItems) {
      monthMeta.selected = true;
    }
    if (monthMeta.selected) {
      this.setMonthBackgroundColor(month, year);
      this.notifySelect(`${year}.${month}`);

      if (this.maxSelectableItems === 1 && this.expandable) {
        this.expanded = false;
        this.expandedChange.emit(this.expanded);
      }
    }
  }

  isMonthAvailable(month: number, year: number): boolean {
    return this.isDateInBounds(month, year) && (!this.useAvailableMonths ||
      this.yearMeta[year] && this.yearMeta[year][month].available);
  }

  isDateInBounds(month: number, year: number): boolean {
    return this.isMonthInBounds(month) && this.isYearInBounds(year);
  }

  isMonthInBounds(month: number): boolean {
    return month > -1 && month < this.months.length;
  }

  isYearInBounds(year: number): boolean {
    return year > -1 && year < this.maxYear;
  }

  private getYearMeta(year: number): any[] {
    if (!this.yearMeta[year]) {
      this.yearMeta[year] = this.createYearMeta(year);
    }
    return this.yearMeta[year];
  }

  private iterateMonthMetas(cb) {
    Object.keys(this.yearMeta).forEach(year => {
      this.yearMeta[year].forEach((monthMeta, month) => {
        cb(month, +year, monthMeta);
      });
    });
  }

  getSelectedDates(): string[] {
    const selectedDates: string[] = [];
    Object.keys(this.yearMeta).forEach(year => {
      this.yearMeta[year].forEach((monthMeta, month) => {
        if (monthMeta.selected) {
          selectedDates.push(`${year}.${month}`);
        }
      });
    });
    return selectedDates;
  }

  private setMonthBackgroundColor(month: number, year: number): void {
    const color: string = this.getMonthBackgroundColor();
    if (color) {
      const monthMeta: any = this.getYearMeta(year)[month];
      monthMeta.color = color;
    }
  }

  private getMonthBackgroundColor(): string {
    if (this.availableColors && this.availableColors.length) {
      return this.availableColors.shift();
    }
  }

  deselectMonth(month: number, year: number = this.currentYear): void {
    if (this.isMonthSelected(month, year)) {
      const monthMeta: any = this.getYearMeta(year)[month];
      monthMeta.selected = false;
      this.clearMonthBackgroundColor(month, year);
      this.notifyDeselect(`${year}.${month}`);
    }
  }

  isMonthSelected(month: number, year: number): boolean {
    return this.isDateInBounds(month, year) &&
      this.yearMeta[year] && this.yearMeta[year][month].selected;
  }

  private clearMonthBackgroundColor(month: number, year: number): void {
    if (this.availableColors) {
      const monthMeta: any = this.getYearMeta(year)[month];
      if (monthMeta.color) {
        this.availableColors.push(monthMeta.color);
        monthMeta.color = undefined;
      }
    }
  }

  deselectAllMonths(): void {
    this.iterateMonthMetas((month, year, monthMeta) => {
      monthMeta.selected = false;
      this.clearMonthBackgroundColor(month, year);
      this.notifyDeselect(`${year}.${month}`);
    });
  }

  addAvailableMonth(month: number, year: number): void {
    if (this.isDateInBounds(month, year)) {
      this.getYearMeta(year)[month].available = true;
    }
  }

  removeAvailableMonth(month: number, year: number): void {
    if (this.isDateInBounds(month, year) && this.yearMeta[year]) {
      this.yearMeta[year][month].available = false;
    }
  }

  removeAllAvailableMonths(): void {
    this.iterateMonthMetas((month, year, monthMeta) => {
      monthMeta.available = false;
    });
  }

  private onPrevYearTap(): void {
    if (this.prevYearAvailable) {
      this.currentYear--;
      this.setYearMeta(this.currentYear);
      this.currentYearChange.emit(this.currentYear);
      this.prevYearBtnTap.emit();
    }
  }

  private onNextYearTap(): void {
    if (this.nextYearAvailable) {
      this.currentYear++;
      this.setYearMeta(this.currentYear);
      this.currentYearChange.emit(this.currentYear);
      this.nextYearBtnTap.emit();
    }
  }

  private onCloseBtnTap(): void {
    if (this.expandable) {
      if (this.expanded) {
        this.expanded = false;
        this.expandedChange.emit(this.expanded);
      }
    }
  }

  private notifySelect(date: string): void {
    this.select.emit(date);
  }

  private notifyDeselect(date: string): void {
    this.deselect.emit(date);
  }

  isCurrentMonth(month: number, year: number = this.currentYear): boolean {
    const now: Date = new Date();
    return now.getFullYear() == year && now.getUTCMonth() === month;
  }

  getMonth(month: number): any {
    return this.isMonthInBounds(month) ? this.months[month] : null;
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

  static monthNamesShort: string[] = MonthPickerComponent.monthNames
    .map(name => name.substr(0, 3));
}
