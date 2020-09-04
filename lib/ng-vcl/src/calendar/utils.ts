import { DateAdapterBase, VCLDateRange } from '../dateadapter/index';
import { VCLCalendarSelection } from './interfaces';


export function compare<VCLDate>(
  adapter: DateAdapterBase<VCLDate>,
  date1: VCLDate | VCLDate[] | VCLDateRange<VCLDate>,
  date2: VCLDate,
  compareFn: (date1: VCLDate, date2: VCLDate) => number): VCLCalendarSelection {
  if (adapter.isRange(date1) && !(compareFn(date1.start, date1.end) === 0)) {
    if (compareFn(date2, date1.start) > 0 && compareFn(date2, date1.end) < 0) {
      return 'range';
    } else if (compareFn(date1.start, date2) === 0) {
      return 'range-start';
    } else if (compareFn(date1.end, date2) === 0) {
      return 'range-end';
    }
  } else if (adapter.isRange(date1)) {
    return compareFn(date1.start, date2) === 0 ? 'range-start-end' : false;
  } else if (adapter.isPartialRange(date1)) {
    return compareFn(date1.start, date2) === 0 ? 'range-partial' : false;
  } else if (adapter.isDateArray(date1)) {
    return date1.some(d => compareFn(d, date2) === 0);
  } else if (adapter.isDate(date1)) {
    return compareFn(date1, date2) === 0;
  } else {
    return false;
  }
}
