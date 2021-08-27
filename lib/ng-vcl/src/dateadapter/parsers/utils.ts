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
  } as const,
  month: {
    month: 'long'
  } as const,
  year: {
    year: 'numeric'
  } as const,
  yearMonthLong: {
    year: 'numeric',
    month: 'long'
  } as const,
  yearMonth: {
    year: 'numeric',
    month: '2-digit',
  } as const,
  weekday: {
    weekday: 'short'
  } as const,
  date: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  } as const,
  time: {
    hour: 'numeric',
    minute: '2-digit',
  } as const,
  minute: {
    minute: 'numeric',
  } as const,
  hour: {
    hour: 'numeric',
  } as const
};  

export function intlFallback(locale: string, date: Date, type: DateAdapterBaseDisplayFormats) {
  if (DEFAULT_DISPLAY_FORMATS[type]) {
    return new Intl.DateTimeFormat(locale, DEFAULT_DISPLAY_FORMATS[type]).format(date);
  }
  unsupportedFormat(type)
}
