import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, Directive, ViewChild, ViewContainerRef, Input, TemplateRef, HostBinding, HostListener, ElementRef, ContentChildren, QueryList, forwardRef, AfterContentInit, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { WormholeHost } from '../wormhole/index';
import { PopoverComponent } from '../popover/index';
import { Subscription } from 'rxjs/Subscription';
import { ObservableComponent } from '../core/index';
import { startWith, map } from 'rxjs/operators';

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

  @Input()
  busy = false;

  @Input()
  showContent = false;

  @Output()
  select = new EventEmitter<any>();

  target$ = new BehaviorSubject<any>(undefined);
  busy$ = this.observeChangeValue<boolean>('busy').pipe(startWith(false));
  showContent$ = this.observeChangeValue<boolean>('showContent').pipe(startWith(false));

  private items$ = new BehaviorSubject<AutocompleteOption[]>([]);

  itemsVisible$ = Observable.combineLatest(this.target$, this.items$, this.busy$, ((target, items, busy) => {
    return !!target && !busy && items.length > 0;
  }));
  busyVisible$ = Observable.combineLatest(this.target$, this.busy$, ((target, busy) => {
    return !!target && busy;
  }));
  contentVisible$ = Observable.combineLatest(this.target$, this.showContent$, ((target, showContent) => {
    return !!target && showContent;
  }));
  visible$ = Observable.combineLatest(this.itemsVisible$, this.busyVisible$, this.contentVisible$, ((v1, v2, v3) => {
    return v1 || v2 || v3;
  }));

  popoverWidth$ = this.target$.map(target => {
    return (target && target.element.nativeElement.offsetWidth) ? target && target.element.nativeElement.offsetWidth + 'px' : undefined;
  });

  itemsSub?: Subscription;

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
    this.itemsSub = items && items.changes.pipe(
      startWith(items.toArray()),
      map(() => items.toArray()))
    .subscribe(items => {
      this.items$.next(items);
      this.highlightedItem = -1;
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.itemsSub && this.itemsSub.unsubscribe();
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
