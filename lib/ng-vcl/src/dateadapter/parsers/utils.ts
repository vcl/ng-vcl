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
