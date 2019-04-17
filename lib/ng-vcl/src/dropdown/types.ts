import { ElementRef, InjectionToken } from '@angular/core';

export interface DropdownItem {
  value: any;
  label: string;
}

export interface Dropdown {
  isItemHighlighted(item: DropdownItem): boolean;
  isItemSelected(item: DropdownItem): boolean;
  selectItem(item: DropdownItem): void;
}
export const DROPDOWN_TOKEN = new InjectionToken<Dropdown>('dropdown');

export interface DropdownOptions {
  selectionMode: 'single' | 'multiple';
  target: ElementRef;
  offClickExcludes?: (ElementRef | HTMLElement)[];
  width?: number;
  height?: number | string;
  maxHeight?: number | string;
  value?: any | any[];
}

export interface DropdownSelectAction {
  type: 'select';
  item: DropdownItem;
  selectedItems: DropdownItem[];
}

export interface DropdownCloseAction {
  type: 'close';
  selectedItems: DropdownItem[];
}

export type DropdownAction = DropdownSelectAction | DropdownCloseAction;
