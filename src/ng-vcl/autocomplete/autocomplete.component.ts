import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, Directive, ViewChild, ViewContainerRef, Input, TemplateRef, HostBinding, HostListener, ElementRef, ContentChildren, QueryList, forwardRef, AfterContentInit, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Output, ContentChild } from '@angular/core';
import { WormholeHost } from '../wormhole/index';
import { PopoverComponent } from '../popover/index';
import { Subscription } from 'rxjs/Subscription';
import { ObservableComponent } from '../core/index';
import { startWith, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';

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
    vcl-busy-indicator {
      padding: 1em;
    }
  `],
  templateUrl: 'autocomplete.component.html'
})
export class Autocomplete extends ObservableComponent implements AfterContentInit, OnDestroy {

  @ViewChild('popover')
  popover: PopoverComponent;

  @ContentChildren(forwardRef(() => AutocompleteOption))
  items?: QueryList<AutocompleteOption>;

  @ContentChildren(forwardRef(() => AutocompleteContent))
  content?: QueryList<AutocompleteContent>;


  @Output()
  select = new EventEmitter<any>();

  target$ = new BehaviorSubject<any>(undefined);

  private items$ = new BehaviorSubject<AutocompleteOption[]>([]);
  private content$ = new BehaviorSubject<AutocompleteContent[]>([]);

  itemsVisible$ = combineLatest(this.target$, this.items$, ((target, items) => {
    return !!target && items.length > 0;
  }));

  visible$ = combineLatest(this.target$, this.items$, this.content$, ((target, items, content) => {
    return !!target && (items.length > 0 || content.length > 0);
  }));

  popoverWidth$ = this.target$.pipe(map(target => {
    return (target && target.element.nativeElement.offsetWidth) ? target && target.element.nativeElement.offsetWidth + 'px' : undefined;
  }));

  itemsSub?: Subscription;
  contentSub?: Subscription;

  highlightedItem: number = -1;

  render(targetElement: ElementRef): Observable<AutocompleteOption> {
    this.highlightedItem = -1;
    const select = new Subject<AutocompleteOption>();

    this.target$.next({
      element: targetElement,
      select(ac: AutocompleteOption) {
        select.next(ac);
      }
    });

    return new Observable<AutocompleteOption>(observer => {
      const sub = select.subscribe(observer);
      return () => {
        sub.unsubscribe();
        select.complete();
        this.target$.next(undefined);
      };
    });
  }

  highlightPrev() {
    if (this.items) {
      if (this.highlightedItem < 0) {
        this.highlightedItem = this.items.toArray().findIndex(item => item.type === 'item');
      } else {
        const revIdx = this.items.toArray().reverse().findIndex((item, thisRevId, items) => {
          const thisIdx = (items.length - 1) - thisRevId;
          return item.type === 'item' && thisIdx < this.highlightedItem;
        });
        if (revIdx === - 1) {
          this.highlightedItem = this.items.toArray().findIndex(item => item.type === 'item');
        } else {
          const idx = (this.items.length - 1) - revIdx;
          this.highlightedItem = idx;
        }
      }
    }
  }

  get isHighlighted() {
    return this.highlightedItem >= 0;
  }

  highlightNext() {
    if (this.items) {
      let idx = this.items.toArray().findIndex((item, thisIdx) => item.type === 'item' && thisIdx > this.highlightedItem);
      if (idx > -1) {
        this.highlightedItem = idx;
      }
    }
  }

  selectHighlighted(): boolean {
    if (this.highlightedItem >= 0 && this.target$.value && this.items && this.items.toArray()[this.highlightedItem]) {
      const item = this.items.toArray()[this.highlightedItem];
      this.target$.value.select(item);
      return true;
    }
    return false;
  }

  ngAfterContentInit(): void {
    const items = this.items;
    const content = this.content;
    this.itemsSub = items && items.changes.pipe(
      startWith(items.toArray()),
      map(() => items.toArray())
    ).subscribe(items => {
      this.items$.next(items);
      this.highlightedItem = -1;
    });
    this.contentSub = content && content.changes.pipe(
      startWith(content.toArray()),
      map(() => content.toArray())
    ).subscribe(this.content$);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.itemsSub && this.itemsSub.unsubscribe();
    this.contentSub && this.contentSub.unsubscribe();
  }
}

@Directive({
  selector: 'vcl-autocomplete-option'
})
export class AutocompleteOption {
  @Input()
  type: 'item' | 'seperator' | 'header' = 'item';
  @Input()
  value?: any;
  @Input()
  label?: string;
  @Input()
  sublabel?: string;
  @Input()
  disabled?: boolean = false;
}

@Component({
  selector: 'vcl-autocomplete-content',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class AutocompleteContent {
  @ViewChild(TemplateRef)
  templateRef: TemplateRef<any>;
}
