import { ElementRef, InjectionToken } from '@angular/core';

export interface SelectListItem {
  value: any;
  label: string;
  isFocused: boolean;
  scrollIntoView(): void;
}

export interface SelectList {
  readonly isDisabled: boolean;
  isItemHighlighted(item: SelectListItem): boolean;
  isItemSelected(item: SelectListItem): boolean;
  isItemHidden(item: SelectListItem): boolean;
  selectItem(item: SelectListItem): void;
  onItemFocus(item: SelectListItem): void;
  onItemBlur(item: SelectListItem): void;
}
export const SELECT_LIST_TOKEN = new InjectionToken<SelectList>('select-list');

export const SELECT_LIST_CONTENT_TOKEN = new InjectionToken('select-list-content');
