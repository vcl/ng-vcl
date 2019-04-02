import { ElementRef, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface AutocompleteItem {
  value: any;
}

export interface AutocompleteHost {
  readonly disabled: boolean;
  isItemHighlighted(item: AutocompleteItem): boolean;
  selectItem(item: AutocompleteItem): void;
}

export interface AutocompleteHandle {
  element: ElementRef;
  select: (value: any) => void;
  destroy: () => void;
}

export const AUTOCOMPLETE_TOKEN = new InjectionToken<AutocompleteHost>('autocomplete');
