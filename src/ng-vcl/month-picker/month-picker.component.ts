import {
  Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef,
  SimpleChanges,
} from '@angular/core';

export interface Month {
  date: string;
  label: string;
  available?: boolean;
  selected?: boolean;
  preselected?: boolean;
  color?: string;
}

@Component({
  selector: 'vcl-month-picker',
  templateUrl: 'month-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerComponent {
  static readonly Tag: string = 'MonthPickerComponent';
  readonly tag: string = MonthPickerComponent.Tag;
  static readonly MonthCount: number = 12;

  readonly now: Date = new Date();

  months: string[];

  yearMeta: any = {};

  currentMeta: any[];

  availableColors: boolean[];

  @Input() debug: boolean = false;

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

  @Input() maxSelectableMonths: number;
  @Input() minSelectableMonths: number = 0;
  @Input() minYear: number = Number.MIN_SAFE_INTEGER;
  @Input() maxYear: number = Number.MAX_SAFE_INTEGER;
  //

  constructor(
    private readonly ref: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
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

  ngOnChanges(changes: SimpleChanges): void {
    const tag: string = `${this.tag}.ngOnChanges()`;
    if (this.debug) console.log(tag, 'changes:', changes);
    if (changes.currentYear && !changes.currentYear.isFirstChange()) this.setYearMeta(changes.currentYear.currentValue);
  }

  setYearMeta(year: number): void {
    if (!this.yearMeta[year]) {
      this.yearMeta[year] = this.createYearMeta(year);
    }
    this.currentMeta = this.yearMeta[year];
  }

  createYearMeta(year: number): any[] {
    return this.months.map(_ => ({}));
  }

  selectMonth(year: number, month: number): void {
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

  preselectMonth(year: number, month: number, color: string): void {
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

  dePreselectMonth(year: number, month: number): void {
    const tag: string = `${this.tag}.dePreselectMonth()`;
    if (this.debug) console.log(tag, `${year}.${month}`);
    if (!this.isMonthPreselected(year, month)) return;

    const monthMeta: any = this.getYearMeta(year)[month];
    monthMeta.preselected = false;
    delete monthMeta.color;
    if (this.debug) console.log(tag, 'monthMeta:', monthMeta);
    this.ref.markForCheck();
  }

  isMonthAvailable(year: number, month: number): boolean {
    return this.isDateInBounds(year, month) && (!this.useAvailableMonths ||
      this.yearMeta[year] && this.yearMeta[year][month].available);
  }

  isDateInBounds(year: number, month: number): boolean {
    return this.isMonthInBounds(month) && this.isYearInBounds(year);
  }

  isMonthInBounds(month: number): boolean {
    return month > -1 && month < MonthPickerComponent.MonthCount;
  }

  isYearInBounds(year: number): boolean {
    return year > this.minYear && year < this.maxYear;
  }

  isMonthPreselected(year: number, month: number): boolean {
    const tag: string = `${this.tag}.isMonthPreselected()`;
    if (this.debug) console.log(tag, `${year}.${month}`);
    const isMonthPreselected: boolean = !!(this.isDateInBounds(year, month) &&
      this.yearMeta[year] && this.yearMeta[year][month].preselected);
    if (this.debug) console.log(tag, 'isMonthPreselected:', isMonthPreselected);
    return isMonthPreselected;
  }

  getYearMeta(year: number): any[] {
    if (!this.yearMeta[year]) {
      this.yearMeta[year] = this.createYearMeta(year);
    }
    return this.yearMeta[year];
  }

  iterateMonthMetas(cb) {
    Object.keys(this.yearMeta).forEach(year => {
      this.yearMeta[year].forEach((monthMeta, month) => {
        cb(Number(year), month, monthMeta);
      });
    });
  }

  getSelectedDates(): string[] {
    const selectedDates: string[] = [];
    this.iterateMonthMetas((year, month, monthMeta) => {
      if (monthMeta.selected) {
        selectedDates.push(`${year}.${month}`);
      }
    });
    return selectedDates;
  }

  setMonthBackgroundColor(year: number, month: number): void {
    const color: string | undefined = this.getMonthBackgroundColor();
    if (color) {
      const monthMeta: any = this.getYearMeta(year)[month];
      monthMeta.color = color;
    }
  }

  getMonthBackgroundColor(): string | undefined {
    const index: number = this.availableColors.findIndex(available => available);
    if (index !== -1) {
      this.availableColors[index] = false;
      return this.colors[index];
    }
  }

  deselectMonth(year: number, month: number): void {
    if (this.isMonthSelected(year, month)) {
      const monthMeta: any = this.getYearMeta(year)[month];
      monthMeta.selected = false;
      this.clearMonthBackgroundColor(year, month);
      this.notifyDeselect(`${year}.${month}`);
    }
  }

  isMonthSelected(year: number, month: number): boolean {
    return this.isDateInBounds(year, month) &&
      this.yearMeta[year] && this.yearMeta[year][month].selected;
  }

  clearMonthBackgroundColor(year: number, month: number): void {
    if (this.availableColors) {
      const monthMeta: any = this.getYearMeta(year)[month];
      if (monthMeta.color) {
        const index: number = this.colors.indexOf(monthMeta.color);
        this.availableColors[index] = true;
        delete monthMeta.color;
      }
    }
  }

  deselectAllMonths(): void {
    this.iterateMonthMetas(this.deselectMonth);
  }

  addAvailableMonth(year: number, month: number): void {
    if (this.isDateInBounds(year, month)) {
      this.getYearMeta(year)[month].available = true;
    }
  }

  removeAvailableMonth(year: number, month: number): void {
    if (this.isDateInBounds(year, month) && this.yearMeta[year]) {
      this.yearMeta[year][month].available = false;
    }
  }

  removeAllAvailableMonths(): void {
    this.iterateMonthMetas((year, month) => {
      this.dePreselectMonth(year, month);
      this.deselectMonth(year, month);
      this.removeAvailableMonth(year, month);
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

  onCloseBtnTap(): void {
    if (this.expandable) {
      if (this.expanded) {
        this.expanded = false;
        this.expandedChange.emit(this.expanded);
      }
    }
  }

  notifySelect(date: string): void {
    this.select.emit(date);
  }

  notifyDeselect(date: string): void {
    this.deselect.emit(date);
  }

  isCurrentMonth(year: number, month?: number): boolean {
    return this.now.getFullYear() == year && this.now.getMonth() === month;
  }

  getMonth(year: number, month: number): any {
    if (this.isDateInBounds(year, month)) {
      return Object.assign({
        date: `${year}.${month}`,
        label: this.months[month]
      }, this.getYearMeta(year)[month]);
    }
  }
}
