import { ElementRef, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface DataListItem {
  value: any;
  isFocused: boolean;
}

export type DataListMode = 'single' | 'multiple' | 'none';

export interface DataList {
  readonly stateChange: Observable<void>;
  readonly isDisabled: boolean;
  readonly selectionMode: DataListMode;
  isItemSelected(item: DataListItem): boolean;
  selectItem(item: DataListItem): void;
  onItemFocus(item: DataListItem): void;
  onItemBlur(item: DataListItem): void;
}
export const DATA_LIST_TOKEN = new InjectionToken<DataList>('data-list');

export const DATA_LIST_ITEM_TOKEN = new InjectionToken('data-list-content');
