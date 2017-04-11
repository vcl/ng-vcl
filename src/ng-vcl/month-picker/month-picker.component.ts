import {
  Component, ChangeDetectionStrategy, Input, Output, EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'vcl-month-picker',
  templateUrl: 'month-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerComponent {
  private static readonly Tag: string = 'MonthPickerComponent';
  private readonly tag: string = MonthPickerComponent.Tag;
  private static readonly MonthCount: number = 12;

  private readonly now: Date = new Date();

  private months: string[];

  private yearMeta: any = {};

  private currentMeta: any[];

  private availableColors: boolean[];

  @Input() private debug: boolean = false;

  @Input() private expanded: boolean = true;
  @Output() private expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() private currentYear: number = this.now.getFullYear();
  @Output() private currentYearChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() private prevYearBtnTap = new EventEmitter();
  @Output() private nextYearBtnTap = new EventEmitter();

  @Output() private select = new EventEmitter<string>();
  @Output() private deselect = new EventEmitter<string>();

  // Customization
  @Input() private tabindex: number = 0;
  @Input() private monthsPerRow: number = 3;

  @Input() private colors: string[];
  @Input() private locales: string | string[] = 'en-US';
  @Input() private dateOptions: any = { month: 'short' };

  @Input() private expandable: boolean = false;
  @Input() private prevYearAvailable: boolean = false;
  @Input() private nextYearAvailable: boolean = false;
  @Input() private useAvailableMonths: boolean = false;

  @Input() private closeBtnIcon: string = 'fa:times';
  @Input() private prevYearBtnIcon: string = 'fa:chevron-left';
  @Input() private nextYearBtnIcon: string = 'fa:chevron-right';

  @Input() private maxSelectableMonths: number;
  @Input() private minSelectableMonths: number = 0;
  @Input() private minYear: number = Number.MIN_SAFE_INTEGER;
  @Input() private maxYear: number = Number.MAX_SAFE_INTEGER;
  //

  constructor(
    private readonly ref: ChangeDetectorRef,
  ) { }

  private ngOnInit(): void {
    // Create month labels.
    const date: Date = new Date(this.now.getFullYear(), 0);
    this.months = Array(MonthPickerComponent.MonthCount).fill(0).map(_ => {
      const month: string = date.toLocaleString(this.locales, this.dateOptions);
      date.setMonth(date.getMonth() + 1);
      return month;
    });

    if (!this.maxSelectableMonths) {
      this.maxSelectableMonths = this.colors && this.colors.length || 1;
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
    return this.months.map(_ => ({}));
  }

  public selectMonth(year: number, month: number): void {
    if (!this.isMonthAvailable(year, month) || this.isMonthPreselected(year, month)) {
      return;
    }

    const monthMeta: any = this.getYearMeta(year)[month];

    if (monthMeta.selected) {
      if (this.getSelectedDates().length <= this.minSelectableMonths) {
        return;
      }
      return this.deselectMonth(year, month);
    }

    if (this.maxSelectableMonths === 1) {
      this.iterateMonthMetas((year, month, mMeta) => {
        mMeta.selected = mMeta === monthMeta;
      });
    }

    if (this.getSelectedDates().length < this.maxSelectableMonths) {
      monthMeta.selected = true;
    }

    if (monthMeta.selected) {
      this.setMonthBackgroundColor(year, month);
      this.notifySelect(`${year}.${month}`);

      if (this.maxSelectableMonths === 1 && this.expandable) {
        this.expanded = false;
        this.expandedChange.emit(this.expanded);
      }
    }
  }

  public preselectMonth(year: number, month: number, color: string): void {
    const tag: string = `${this.tag}.preselectMonth()`;
    if (this.debug) console.log(tag, `${year}.${month}`);
    const monthMeta: any = this.getYearMeta(year)[month];
    if (monthMeta.selected) {
      this.deselectMonth(year, month);
    }
    monthMeta.preselected = true;
    monthMeta.color = color;
    if (this.debug) console.log(tag, 'monthMeta:', monthMeta);
    this.ref.markForCheck();
  }

  public dePreselectMonth(year: number, month: number): void {
    const tag: string = `${this.tag}.dePreselectMonth()`;
    if (this.debug) console.log(tag, `${year}.${month}`);
    if (!this.isMonthPreselected(year, month)) return;

    const monthMeta: any = this.getYearMeta(year)[month];
    monthMeta.preselected = false;
    delete monthMeta.color;
    if (this.debug) console.log(tag, 'monthMeta:', monthMeta);
    this.ref.markForCheck();
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

  public isMonthPreselected(year: number, month: number): boolean {
    const tag: string = `${this.tag}.isMonthPreselected()`;
    if (this.debug) console.log(tag, `${year}.${month}`);
    const isMonthPreselected: boolean = !!(this.isDateInBounds(year, month) &&
      this.yearMeta[year] && this.yearMeta[year][month].preselected);
    if (this.debug) console.log(tag, 'isMonthPreselected:', isMonthPreselected);
    return isMonthPreselected;
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
