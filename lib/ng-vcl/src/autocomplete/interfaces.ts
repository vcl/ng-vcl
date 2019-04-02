import { ElementRef, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface AutocompleteResult {
  value: any;
  label: string;
}

export interface AutocompleteTarget {
  element: ElementRef;
  select: (result: AutocompleteResult) => void;
  close: () => void;
}
export interface AutocompleteHost {
  target?: AutocompleteTarget;
  disabled: boolean;
  highlightedItem?: AutocompleteResult;
  render(element: ElementRef): Observable<AutocompleteResult>;
  highlightPrev(): void;
  highlightNext(): void;
  selectHighlighted(): boolean;
}

export const AUTOCOMPLETE_TOKEN = new InjectionToken<AutocompleteHost>('autocomplete');
