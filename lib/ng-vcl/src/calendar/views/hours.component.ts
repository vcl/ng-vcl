import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { DateAdapterBase, VCLDateRange } from '../../dateadapter/index';
import { VCLCalendarHours } from '../interfaces';

import { VCLButtonModule } from '../../button/index';

@Component({
  selector: 'vcl-calendar-view-hours',
  templateUrl: 'hours.component.html',
  exportAs: 'vclCalendarViewHours',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VCLButtonModule],
})
export class CalendarViewHoursComponent<VCLDate> implements OnChanges {
  constructor(private dateAdapter: DateAdapterBase<VCLDate>) {
    this.updateCalendarHours();
  }

  calendar: VCLCalendarHours;

  @Input()
  disabled = false;

  @Input()
  value?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Output()
  valueChange = new EventEmitter<VCLDate>();

  @Output()
  labelClick = new EventEmitter<any>();

  hour?: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      if (changes.value.currentValue) {
        this.hour = this.dateAdapter.getHour(changes.value.currentValue);
      } else {
        this.hour = undefined;
      }
    }
  }

  onSelectHour(hour: number) {
    if (this.disabled) {
      return;
    }

    if (typeof hour === 'number') {
      this.hour = hour;
      const date =
        this.dateAdapter.toDate(this.value) || this.dateAdapter.today();
      const datetime = this.dateAdapter.createDateTime(
        this.dateAdapter.getYear(date),
        this.dateAdapter.getMonth(date),
        this.dateAdapter.getDay(date),
        this.hour,
        this.dateAdapter.getMinute(date),
        0
      );
      this.valueChange.emit(datetime);
    }
  }

  onLabelClick() {
    this.labelClick.emit();
  }

  updateCalendarHours() {
    const use24hTime = this.dateAdapter.use24hTime();
    const hours = Array.from(new Array(4)).map((_, i) =>
      Array.from(new Array(6)).map((__, j) => {
        const hour = i * +6 + j;
        return {
          hour,
          label: (use24hTime ? hour : hour % 12 || 12).toString(),
        };
      })
    );

    this.calendar = {
      use24hTime,
      hours,
    };
  }
}
