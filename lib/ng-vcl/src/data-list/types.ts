import { ElementRef, InjectionToken } from '@angular/core';

export interface DataListItem {
  value: any;
  isFocused: boolean;
}

export interface DataList {
  readonly isDisabled: boolean;
  isItemSelected(item: DataListItem): boolean;
  selectItem(item: DataListItem): void;
  onItemFocus(item: DataListItem): void;
  onItemBlur(item: DataListItem): void;
}
export const DATA_LIST_TOKEN = new InjectionToken<DataList>('data-list');

export const DATA_LIST_ITEM_TOKEN = new InjectionToken('data-list-content');
