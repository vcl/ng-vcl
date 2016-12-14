import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vcl-month-picker',
  templateUrl: 'month-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerComponent {
  private static readonly TAG: string = 'MonthPickerComponent';

  private now: Date = new Date();

  private months: any[];

  private yearMeta: any;

  private currentMeta: any[];

  private availableColors: boolean[];

  @Input() expanded: boolean = true;
  @Output() expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentYear: number = this.now.getFullYear();
  @Output() currentYearChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() prevYearBtnTap = new EventEmitter();
  @Output() nextYearBtnTap = new EventEmitter();

  @Output() select = new EventEmitter<string>();
  @Output() deselect = new EventEmitter<string>();

  // Customization
  @Input() colors: string[];
  @Input() tabindex: number = 0;
  @Input() monthsPerRow: number = 3;
  @Input() useShortNames: boolean = false;
  @Input() useAvailableMonths: boolean = false;

  @Input() expandable: boolean = false;
  @Input() prevYearAvailable: boolean = false;
  @Input() nextYearAvailable: boolean = false;
  @Input() maxYear: number = Number.MAX_SAFE_INTEGER;

  @Input() closeBtnIcon: string = "fa:times";
  @Input() prevYearBtnIcon: string = "fa:chevron-left";
  @Input() nextYearBtnIcon: string = "fa:chevron-right";

  @Input() maxSelectableItems: number;
  @Input() minSelectableItems: number = 1;
  //

  constructor() {
    this.yearMeta = {};
  }

  ngOnInit(): void {
    // TODO: Localize here instead of in the template so outside components
    // when calling month-picker.getMonth(month) get calendar's localized and used label.
    this.months = (this.useShortNames ? MonthPickerComponent.monthNamesShort :
      MonthPickerComponent.monthNames).map(month => ({
        label: month
      }));

    if (!this.maxSelectableItems) {
      this.maxSelectableItems = this.colors && this.colors.length || 1;
    }

    this.availableColors = this.colors ? this.colors.map(color => true) : [];

    this.setYearMeta(this.currentYear);
  }

  private setYearMeta(year: number): void {
    if (!this.yearMeta[year]) {
      this.yearMeta[year] = this.createYearMeta(year);
    }
    this.currentMeta = this.yearMeta[year];
  }

  private createYearMeta(year: number): any[] {
    return this.months.map(monthMeta => ({}));
  }

  public selectMonth(month: number, year: number = this.currentYear): void {
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

  public isMonthAvailable(month: number, year: number): boolean {
    return this.isDateInBounds(month, year) && (!this.useAvailableMonths ||
      this.yearMeta[year] && this.yearMeta[year][month].available);
  }

  public isDateInBounds(month: number, year: number): boolean {
    return this.isMonthInBounds(month) && this.isYearInBounds(year);
  }

  public isMonthInBounds(month: number): boolean {
    return month > -1 && month < this.months.length;
  }

  public isYearInBounds(year: number): boolean {
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

  public getSelectedDates(): string[] {
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
    const index: number = this.availableColors.findIndex(available => available);
    if (index !== -1) {
      this.availableColors[index] = false;
      return this.colors[index];
    }
  }

  public deselectMonth(month: number, year: number = this.currentYear): void {
    if (this.isMonthSelected(month, year)) {
      const monthMeta: any = this.getYearMeta(year)[month];
      monthMeta.selected = false;
      this.clearMonthBackgroundColor(month, year);
      this.notifyDeselect(`${year}.${month}`);
    }
  }

  public isMonthSelected(month: number, year: number): boolean {
    return this.isDateInBounds(month, year) &&
      this.yearMeta[year] && this.yearMeta[year][month].selected;
  }

  private clearMonthBackgroundColor(month: number, year: number): void {
    if (this.availableColors) {
      const monthMeta: any = this.getYearMeta(year)[month];
      if (monthMeta.color) {
        const index: number = this.colors.indexOf(monthMeta.color);
        this.availableColors[index] = true;
        monthMeta.color = undefined;
      }
    }
  }

  public deselectAllMonths(): void {
    this.iterateMonthMetas((month, year, monthMeta) => {
      monthMeta.selected = false;
      this.clearMonthBackgroundColor(month, year);
      this.notifyDeselect(`${year}.${month}`);
    });
  }

  public addAvailableMonth(month: number, year: number): void {
    if (this.isDateInBounds(month, year)) {
      this.getYearMeta(year)[month].available = true;
    }
  }

  public removeAvailableMonth(month: number, year: number): void {
    if (this.isDateInBounds(month, year) && this.yearMeta[year]) {
      this.yearMeta[year][month].available = false;
    }
  }

  public removeAllAvailableMonths(): void {
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

  public isCurrentMonth(month: number, year: number = this.currentYear): boolean {
    return this.now.getFullYear() == year && this.now.getMonth() === month;
  }

  public getMonth(month: number): any {
    return this.isMonthInBounds(month) ? this.months[month] : null;
  }

  public static readonly monthNames: string[] = [
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

  public static readonly monthNamesShort: string[] = MonthPickerComponent.monthNames
    .map(name => name.substr(0, 3));
}
