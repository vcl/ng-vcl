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
import { VCLCalendarMinutes } from '../interfaces';

@Component({
    selector: 'vcl-calendar-view-minutes',
    templateUrl: 'minutes.component.html',
    exportAs: 'vclCalendarViewMinutes',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CalendarViewMinutesComponent<VCLDate> implements OnChanges {
  constructor(private dateAdapter: DateAdapterBase<VCLDate>) {
    this.updateCalendarMinutes();
  }

  calendar: VCLCalendarMinutes;

  @Input()
  disabled = false;

  @Input()
  value?: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;

  @Output()
  valueChange = new EventEmitter<VCLDate>();

  @Output()
  labelClick = new EventEmitter<any>();

  minute?: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      if (changes.value.currentValue) {
        this.minute = this.dateAdapter.getMinute(changes.value.currentValue);
      } else {
        this.minute = undefined;
      }
    }
  }

  onSelectMinute(minute: number) {
    if (this.disabled) {
      return;
    }

    if (typeof minute === 'number') {
      this.minute = minute;
      const date =
        this.dateAdapter.toDate(this.value) || this.dateAdapter.today();
      const datetime = this.dateAdapter.createDateTime(
        this.dateAdapter.getYear(date),
        this.dateAdapter.getMonth(date),
        this.dateAdapter.getDay(date),
        this.dateAdapter.getHour(date),
        this.minute,
        0
      );
      this.valueChange.emit(datetime);
    }
  }

  onLabelClick() {
    this.labelClick.emit();
  }

  updateCalendarMinutes() {
    const minutes = Array.from(new Array(6)).map((_, i) =>
      Array.from(new Array(10)).map((__, j) => {
        const minute = i * 10 + j;
        return {
          minute,
          label: minute.toString(),
        };
      })
    );

    this.calendar = {
      minutes,
    };
  }
}
