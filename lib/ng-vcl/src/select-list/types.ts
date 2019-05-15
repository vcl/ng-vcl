import { ElementRef, InjectionToken } from '@angular/core';

export interface SelectListItem {
  value: any;
  label: string;
  isFocused: boolean;
}

export interface SelectList {
  isItemHighlighted(item: SelectListItem): boolean;
  isItemSelected(item: SelectListItem): boolean;
  selectItem(item: SelectListItem): void;
  onItemFocus(item: SelectListItem): void;
  onItemBlur(item: SelectListItem): void;
}
export const SELECT_LIST_TOKEN = new InjectionToken<SelectList>('select-list');

export interface SelectListOptions {
  selectionMode: 'single' | 'multiple';
  target: ElementRef;
  offClickExcludes?: (ElementRef | HTMLElement)[];
  width?: number;
  height?: number | string;
  maxHeight?: number | string;
  value?: any | any[];
}

export const SELECT_LIST_CONTENT_TOKEN = new InjectionToken('select-list-content');
