import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vcl-month-picker',
  templateUrl: 'month-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerComponent {
  private static readonly TAG: string = 'MonthPickerComponent';
  private static readonly MonthCount: number = 12;

  private now: Date = new Date();

  months: string[];

  private yearMeta: any = {};

  currentMeta: any[];

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
  @Input() tabindex: number = 0;
  @Input() monthsPerRow: number = 3;

  @Input() colors: string[];
  @Input() locales: string | string[] = 'en-US';
  @Input() dateOptions: any = { month: 'short' };

  @Input() expandable: boolean = false;
  @Input() prevYearAvailable: boolean = false;
  @Input() nextYearAvailable: boolean = false;
  @Input() useAvailableMonths: boolean = false;

  @Input() closeBtnIcon: string = 'fa:times';
  @Input() prevYearBtnIcon: string = 'fa:chevron-left';
  @Input() nextYearBtnIcon: string = 'fa:chevron-right';

  @Input() maxSelectableItems: number;
  @Input() minSelectableItems: number = 1;
  @Input() minYear: number = Number.MIN_SAFE_INTEGER;
  @Input() maxYear: number = Number.MAX_SAFE_INTEGER;
  //

  ngOnInit(): void {
    const d: Date = new Date(this.now.getFullYear(), 0);
    this.months = Array(MonthPickerComponent.MonthCount).fill(0).map(x => {
      const month: string = d.toLocaleString(this.locales, this.dateOptions);
      d.setMonth(d.getMonth() + 1);
      return month;
    });

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
    return this.months.map(x => ({}));
  }

  public selectMonth(year: number, month: number): void {
    if (!this.isMonthAvailable(year, month)) {
      return;
    }

    const monthMeta: any = this.getYearMeta(year)[month];
    if (monthMeta.selected) {
      return this.deselectMonth(year, month);
    }

    if (this.maxSelectableItems === 1) {
      this.iterateMonthMetas((year, month, mMeta) => {
        mMeta.selected = mMeta === monthMeta;
      });
    } else if (this.getSelectedDates().length < this.maxSelectableItems) {
      monthMeta.selected = true;
    }
    if (monthMeta.selected) {
      this.setMonthBackgroundColor(year, month);
      this.notifySelect(`${year}.${month}`);

      if (this.maxSelectableItems === 1 && this.expandable) {
        this.expanded = false;
        this.expandedChange.emit(this.expanded);
      }
    }
  }

  public isMonthAvailable(year: number, month: number): boolean {
    return this.isDateInBounds(year, month) && (!this.useAvailableMonths ||
      this.yearMeta[year] && this.yearMeta[year][month].available);
  }

  public isDateInBounds(year: number, month: number): boolean {
    return this.isMonthInBounds(month) && this.isYearInBounds(year);
  }

  public isMonthInBounds(month: number): boolean {
    return month > -1 && month < MonthPickerComponent.MonthCount;
  }

  public isYearInBounds(year: number): boolean {
    return year > this.minYear && year < this.maxYear;
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
        cb(Number(year), month, monthMeta);
      });
    });
  }

  public getSelectedDates(): string[] {
    const selectedDates: string[] = [];
    this.iterateMonthMetas((year, month, monthMeta) => {
      if (monthMeta.selected) {
        selectedDates.push(`${year}.${month}`);
      }
    });
    return selectedDates;
  }

  private setMonthBackgroundColor(year: number, month: number): void {
    const color = this.getMonthBackgroundColor();
    if (color) {
      const monthMeta: any = this.getYearMeta(year)[month];
      monthMeta.color = color;
    }
  }

  private getMonthBackgroundColor(): string | null {
    const index: number = this.availableColors.findIndex(available => available);
    if (index !== -1) {
      this.availableColors[index] = false;
      return this.colors[index];
    }
    return null;
  }

  public deselectMonth(year: number, month: number): void {
    if (this.isMonthSelected(year, month)) {
      const monthMeta: any = this.getYearMeta(year)[month];
      monthMeta.selected = false;
      this.clearMonthBackgroundColor(year, month);
      this.notifyDeselect(`${year}.${month}`);
    }
  }

  public isMonthSelected(year: number, month: number): boolean {
    return this.isDateInBounds(year, month) &&
      this.yearMeta[year] && this.yearMeta[year][month].selected;
  }

  private clearMonthBackgroundColor(year: number, month: number): void {
    if (this.availableColors) {
      const monthMeta: any = this.getYearMeta(year)[month];
      if (monthMeta.color) {
        const index: number = this.colors.indexOf(monthMeta.color);
        this.availableColors[index] = true;
        delete monthMeta.color;
      }
    }
  }

  public deselectAllMonths(): void {
    this.iterateMonthMetas((year, month, monthMeta) => {
      monthMeta.selected = false;
      this.clearMonthBackgroundColor(year, month);
      this.notifyDeselect(`${year}.${month}`);
    });
  }

  public addAvailableMonth(year: number, month: number): void {
    if (this.isDateInBounds(year, month)) {
      this.getYearMeta(year)[month].available = true;
    }
  }

  public removeAvailableMonth(year: number, month: number): void {
    if (this.isDateInBounds(year, month) && this.yearMeta[year]) {
      this.yearMeta[year][month].available = false;
    }
  }

  public removeAllAvailableMonths(): void {
    this.iterateMonthMetas((year, month, monthMeta) => {
      monthMeta.available = false;
    });
  }

  onPrevYearTap(): void {
    if (this.prevYearAvailable) {
      this.currentYear--;
      this.setYearMeta(this.currentYear);
      this.currentYearChange.emit(this.currentYear);
      this.prevYearBtnTap.emit();
    }
  }

  onNextYearTap(): void {
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

  public isCurrentMonth(year: number, month: number): boolean {
    return this.now.getFullYear() == year && this.now.getMonth() === month;
  }

  public getMonth(year: number, month: number): any {
    if (this.isDateInBounds(year, month)) {
      return Object.assign({
        date: `${year}.${month}`,
        label: this.months[month]
      }, this.getYearMeta(year)[month]);
    }
  }
}
