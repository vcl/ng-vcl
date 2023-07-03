export interface Token {
  label: string;
  value: any;
  selected?: boolean;
  selectable?: boolean;
  removable?: boolean;
  setDisabledState?(isDisabled: boolean): void;
}

export interface TokenObserver {
  notifyTokenSelect(token: Token): void;
  notifyTokenRemove(token: Token): void;
  notifyTokenBlur(token: Token): void;
}
