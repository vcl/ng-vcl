import { DateAdapterBaseDisplayFormats } from '../interfaces';

export function unsupportedFormat(format: string): never {
  throw new Error('Unsupported format: ' + format);
}

export function extractInt(value: string, regEx: RegExp): number[] | undefined {
  const result = regEx.exec(value);
  if (result) {
    const numbers = result.splice(1).map(s => parseInt(s, 10));
    return numbers.every(n => isFinite(n)) ? numbers : undefined;
  }
  return undefined;
}

export function pad(value: number, size: number) {
  return ('0000' + value).substr(-size);
}

const DEFAULT_DISPLAY_FORMATS = {
  day: {
    day: 'numeric'
  },
  month: {
    month: 'long'
  },
  year: {
    year: 'numeric'
  },
  yearMonthLong: {
    year: 'numeric',
    month: 'long'
  },
  yearMonth: {
    year: 'numeric',
    month: '2-digit',
  },
  weekday: {
    weekday: 'short'
  },
  date: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  },
  time: {
    hour: 'numeric',
    minute: '2-digit',
  },
  minute: {
    minute: 'numeric',
  },
  hour: {
    hour: 'numeric',
  }
};  

export function intlFallback(locale: string, date: Date, type: DateAdapterBaseDisplayFormats) {
  if (DEFAULT_DISPLAY_FORMATS[type]) {
    return new Intl.DateTimeFormat(locale, DEFAULT_DISPLAY_FORMATS[type]).format(date);
  }
  unsupportedFormat(type)
}
