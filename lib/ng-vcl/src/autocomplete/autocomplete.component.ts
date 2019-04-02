import { Observable, Subscription } from 'rxjs';
import { Component, ViewChild, Input, ElementRef, forwardRef, OnDestroy, EventEmitter, Output, ContentChildren, QueryList } from '@angular/core';
import { PopoverComponent } from '../popover/index';
import { ObservableComponent } from '../core/index';
import { AUTOCOMPLETE_TOKEN, AutocompleteHost, AutocompleteHandle, AutocompleteItem } from './interfaces';
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

  @Input()
  popoverWidth?: number;

  @Output()
  itemSelected = new EventEmitter();

  get width() {
    if (typeof this.popoverWidth === 'number') {
      return this.popoverWidth;
    } else if (this.handle && this.handle.element && this.handle.element.nativeElement.offsetWidth) {
      return this.handle.element.nativeElement.offsetWidth + 'px';
    } else {
      return undefined;
    }
  }

  itemsSub?: Subscription;
  contentSub?: Subscription;

  highlightedItem?: AutocompleteItemComponent;

  handle?: AutocompleteHandle;

  isItemHighlighted(item: AutocompleteItem): boolean {
    return this.highlightedItem === item;
  }

  selectItem(item: AutocompleteItem): void {
    if (this.handle) {
      this.itemSelected.emit(item.value);
      this.handle.select(item.value);
    }
  }

  render(element: ElementRef): Observable<any> {
    if (this.handle) {
      this.handle.destroy();
    }

    return new Observable<any>(observer => {
      const handle = this.handle = {
        destroy: () => {
          this.handle = undefined;
          observer.complete();
        },
        select: (value: any) => {
          observer.next(value);
          handle.destroy();
        },
        element
      };
      return () => {
        handle.destroy();
      };
    });
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
    if (this.highlightedItem && this.handle) {
      this.handle.select(this.highlightedItem);
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
