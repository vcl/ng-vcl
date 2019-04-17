
export interface Token {
  label: string;
  value: any;
  selected?: boolean;
}

export interface TokenObserver {
  notifyTokenSelect(token: Token): void;
  notifyTokenRemove(token: Token): void;
  notifyTokenBlur(token: Token): void;
}
