import { Component, ViewChild, TemplateRef, ViewContainerRef, ElementRef,
         Input, Optional, ChangeDetectorRef, OnDestroy, Output, EventEmitter, Injector, forwardRef, NgZone, ContentChildren, QueryList, HostBinding } from '@angular/core';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { Subscription, merge, NEVER, Subject, Observable } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { filter, switchMap, take, startWith, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { TemplateOverlay } from '../overlay';
import { createOffClickStream } from '../off-click';
import { DropdownItemComponent } from './components/dropdown-item.component';
import { DROPDOWN_TOKEN, Dropdown, DropdownItem, DropdownAction, DropdownOptions } from './types';

@Component({
  selector: 'vcl-dropdown',
  templateUrl: 'dropdown.component.html',
  exportAs: 'vclDropdown',
  providers: [
    {
      provide: DROPDOWN_TOKEN,
      useExisting: forwardRef(() => DropdownComponent)
    }
  ]
})
export class DropdownComponent extends TemplateOverlay<DropdownItem> implements Dropdown, OnDestroy {

  constructor(
    injector: Injector,
    @Optional()
    private _dir: Directionality,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay,
    private cdRef: ChangeDetectorRef,
  ) {
    super(injector);
  }

  private _dropdownOpenedSub?: Subscription;
  private _target?: ElementRef;
  private _offClickExclude?: (ElementRef | HTMLElement)[];
  private _highlightedItem: DropdownItem;
  private _values: any[] = [];
  private _actionEmitter: Subject<DropdownAction>;

  @ViewChild(TemplateRef)
  private _templateRef: TemplateRef<any>;

  @ContentChildren(DropdownItemComponent)
  private _items?: QueryList<DropdownItemComponent>;

  // The dropdown element should not be visible in dom. Only its content.
  @HostBinding('style.display')
  styleDisplay = 'none';

  protected getTemplateRef(): TemplateRef<any> {
    return this._templateRef;
  }

  protected getViewContainerRef(): ViewContainerRef {
    return this.viewContainerRef;
  }

  isItemHighlighted(item: DropdownItem): boolean {
    return item === this._highlightedItem;
  }

  isItemSelected(item: DropdownItem): boolean {
    return this._values.includes(item.value);
  }

  selectItem(item: DropdownItem): void {
    if (this._values.includes(item.value)) {
      this._values = this._values.filter(_value => _value !== item.value);
    } else {
      this._values = [...this._values, item.value];
    }
    const selectedItems = this._items.filter(_item => this._values.includes(_item.value));

    this._actionEmitter.next({
      type: 'select',
      item: item,
      selectedItems
    });
  }

  highlight(value: any) {
    this._highlightedItem = this._items.find((item) => item.value === value);
  }

  highlightIndex(idx: any) {
    this._highlightedItem = this._items.find((item, _idx) => idx === _idx);
  }

  highlightPrev() {
    if (this._items) {
      const currIdx = this._items.toArray().findIndex((item) => item === this._highlightedItem);
      if (currIdx < 0) {
        this._highlightedItem = this._items.first;
      } else {
        const highlightedItem = this._items.toArray().reverse().find((item, thisRevId, items) => {
          const thisIdx = (items.length - 1) - thisRevId;
          return thisIdx < currIdx;
        });
        if (highlightedItem) {
          this._highlightedItem = highlightedItem;
        } else {
          this._highlightedItem = this._items.first;
        }
      }
    }
  }

  highlightNext() {
    if (this._items) {
      const currIdx = this._items.toArray().findIndex((item) => item === this._highlightedItem);

      const highlightedItem = this._items.toArray().find((item, thisIdx) => thisIdx > currIdx);
      if (highlightedItem) {
        this._highlightedItem = highlightedItem;
      }
    }
  }

  getItems() {
    return this._items.toArray();
  }

  getHighlightedItem() {
    return this._highlightedItem;
  }

  get isOpen() {
    return this.isAttached;
  }

  open(opts: DropdownOptions): Observable<DropdownAction> {
    if (this.isAttached) {
      this.detach();
    }

    this._actionEmitter = new Subject();

    this._target = opts.target;
    this._offClickExclude = opts.offClickExclude;
    this._values = opts.values || [];

    const config = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this._dir,
      width: opts.width !== undefined ? opts.width : this._target.nativeElement.getBoundingClientRect().width,
      panelClass: ['vclDropdown', 'vclOpen'],
      positionStrategy: this.overlay.position()
      .connectedTo(this._target, {
        originX: 'start',
        originY: 'bottom'
      }, {
        overlayX: 'start',
        overlayY: 'top'
      }).withFallbackPosition({
        originX: 'start',
        originY: 'top'
      }, {
        overlayX: 'start',
        overlayY: 'bottom'
      })
    });
    this.attach(config);

    return this._actionEmitter.asObservable();
  }

  close() {
    this.detach();
  }

  protected afterAttached(): void {
    this._dropdownOpenedSub = this._items.changes.pipe(
      startWith(undefined),
      switchMap(() => {
        if (!this.isAttached) {
          return NEVER;
        }
        return merge(
          this.overlayRef.keydownEvents().pipe(
            filter(event => {
              return event.keyCode === ESCAPE;
            })
          ),
          createOffClickStream([this.overlayRef.overlayElement, this._target, ...this._offClickExclude], {
            document: this.injector.get(DOCUMENT)
          })
        );
      })
    ).subscribe(() => {
      this.detach();
    });
  }

  protected afterDetached(result) {
    if (!this.isDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      this.cdRef.detectChanges();
    }
    this._dropdownOpenedSub && this._dropdownOpenedSub.unsubscribe();
    this._target = undefined;
    this._highlightedItem = undefined;

    const selectedItems = this._items.filter(_item => this._values.includes(_item.value));

    this._actionEmitter && this._actionEmitter.next({
      type: 'close',
      selectedItems
    });
    this._actionEmitter && this._actionEmitter.complete();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
