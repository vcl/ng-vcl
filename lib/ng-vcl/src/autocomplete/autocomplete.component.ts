import { Observable, Subscription } from 'rxjs';
import { Component, ViewChild, Input, ElementRef, forwardRef, OnDestroy, EventEmitter, Output, ContentChildren, QueryList } from '@angular/core';
import { PopoverComponent } from '../popover/index';
import { ObservableComponent } from '../core/index';
import { AutocompleteResult, AUTOCOMPLETE_TOKEN, AutocompleteHost, AutocompleteTarget } from './interfaces';
import { AutocompleteItemComponent } from './autocomplete-item.component';

@Component({
  selector: 'vcl-autocomplete',
  exportAs: 'vclAutocomplete',
  styles: [`
    .vclDropdown {
      padding: 0;
      position: static;
    }
    .vclPopOver {
      padding: 0;
    }
  `],
  templateUrl: 'autocomplete.component.html',
  providers: [
    {
      provide: AUTOCOMPLETE_TOKEN,
      useExisting: forwardRef(() => AutocompleteComponent)
    }
  ]
})
export class AutocompleteComponent extends ObservableComponent implements OnDestroy, AutocompleteHost {

  @ContentChildren(forwardRef(() => AutocompleteItemComponent))
  items?: QueryList<AutocompleteItemComponent>;

  @ViewChild('popover')
  popover: PopoverComponent;

  @Input()
  disabled = false;

  @Output()
  select = new EventEmitter<AutocompleteResult>();

  get popoverWidth() {
    if (this.target && this.target.element && this.target.element.nativeElement.offsetWidth) {
      return this.target.element.nativeElement.offsetWidth + 'px';
    } else {
      return undefined;
    }
  }

  itemsSub?: Subscription;
  contentSub?: Subscription;

  highlightedItem?: AutocompleteItemComponent;

  target?: AutocompleteTarget;

  render(element: ElementRef): Observable<AutocompleteResult> {
    if (this.target) {
      this.target.close();
      this.target = undefined;
    }

    return new Observable<AutocompleteResult>(observer => {
      this.target = {
        close: () => observer.complete(),
        select: (result: AutocompleteResult) => observer.next(result),
        element: element
      };
      return () => {
        this.target.close();
        this.target = undefined;
        observer.complete();
      };
    });
  }

  get visible(): boolean {
    return !!this.target;
  }

  highlightPrev() {
    if (this.items) {
      const currIdx = this.items.toArray().findIndex((item, thisIdx) => item === this.highlightedItem);
      if (currIdx < 0) {
        this.highlightedItem = this.items.first;
      } else {
        const highlightedItem = this.items.toArray().reverse().find((item, thisRevId, items) => {
          const thisIdx = (items.length - 1) - thisRevId;
          return thisIdx < currIdx;
        });
        if (highlightedItem) {
          this.highlightedItem = highlightedItem;
        } else {
          this.highlightedItem = this.items.first;
        }
      }
    }
  }

  highlightNext() {
    if (this.items) {
      const currIdx = this.items.toArray().findIndex((item, thisIdx) => item === this.highlightedItem);

      const highlightedItem = this.items.toArray().find((item, thisIdx) => thisIdx > currIdx);
      if (highlightedItem) {
        this.highlightedItem = highlightedItem;
      }
    }
  }

  selectHighlighted() {
    if (this.highlightedItem && this.target) {
      this.target.select(this.highlightedItem);
      return true;
    }
    return false;
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.itemsSub && this.itemsSub.unsubscribe();
    this.contentSub && this.contentSub.unsubscribe();
  }
}
