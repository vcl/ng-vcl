import { Component, ViewChild, TemplateRef, ViewContainerRef, ElementRef,
         Input, Optional, ChangeDetectorRef, OnDestroy, Output, EventEmitter, Injector, forwardRef, NgZone, ContentChildren, QueryList, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { Subscription, merge, NEVER, Subject, Observable } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';
import { filter, switchMap, take, startWith, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { TemplateOverlay } from '../overlay/index';
import { createOffClickStream } from '../off-click/index';
import { DropdownItemComponent } from './components/dropdown-item.component';
import { DROPDOWN_TOKEN, Dropdown, DropdownItem, DropdownAction, DropdownOptions } from './types';
import { DropdownContentComponent } from './components/dropdown-content.component';

@Component({
  selector: 'vcl-dropdown',
  templateUrl: 'dropdown.component.html',
  exportAs: 'vclDropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  private _highlightedItem: DropdownItem;
  private _actionEmitter: Subject<DropdownAction>;

  @Input()
  selectionMode: 'single' | 'multiple' | 'none' = 'single';

  @Input()
  value?: any | any[];

  @Input()
  target?: ElementRef | HTMLElement | {elementRef};

  @Input()
  width?: number | string;

  @Input()
  height?: number | string;

  @Input()
  maxHeight?: number | string;

  @Input()
  offClickExcludes?: any[];

  @Output()
  valueChange =  new EventEmitter();

  @Output()
  afterClose =  new EventEmitter();

  @ViewChild(TemplateRef)
  private _templateRef: TemplateRef<any>;

  @ContentChildren(DropdownItemComponent)
  private _items?: QueryList<DropdownItemComponent>;

  @ContentChildren(DropdownContentComponent)
  private _content?: QueryList<DropdownContentComponent>;

  // The dropdown element should not be visible in dom. Only its content rendered at the app root element.
  @HostBinding('style.display')
  styleDisplay = 'none';

  protected getTemplateRef(): TemplateRef<any> {
    return this._templateRef;
  }

  protected getViewContainerRef(): ViewContainerRef {
    return this.viewContainerRef;
  }

  get hasContent() {
    return this._items.length > 0 && this._content.length > 0;
  }

  private get _valueAsArray() {
    if (Array.isArray(this.value)) {
      return this.value;
    } else {
      return this.value === undefined ? [] : [this.value];
    }
  }

  isItemHighlighted(item: DropdownItem): boolean {
    return item === this._highlightedItem;
  }

  isItemSelected(item: DropdownItem): boolean {
    return this._valueAsArray.includes(item.value);
  }

  selectItem(item: DropdownItem): void {
    if (this.selectionMode === 'none') {
      this.value = undefined;
    } else if (this.selectionMode === 'single') {
      this.value = item.value;
    } else {
      const values = this._valueAsArray;
      if (values.includes(item.value)) {
        this.value = values.filter(_value => _value !== item.value);
      } else {
        this.value = [...values, item.value];
      }
    }

    this.valueChange.emit(this.value);

    this._actionEmitter.next({
      type: 'select',
      item: item,
      selectedItems: this.selectedItems
    });

    if (this.selectionMode === 'single' || this.selectionMode === 'none') {
      this.close();
    }
  }

  get selectedItems() {
    return this._items.filter(_item => this._valueAsArray.includes(_item.value));

  }

  highlight(value: any) {
    this._highlightedItem = this._items.find((item) => item.value === value);
  }

  highlightIndex(idx: any) {
    this._highlightedItem = this._items.find((item, _idx) => idx === _idx);
  }

  highlightPrev() {
    if (this._items) {
      if (!this._highlightedItem) {
        const selectedItems = this.selectedItems;
        this._highlightedItem = selectedItems[0];
      }

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
      if (!this._highlightedItem) {
        const selectedItems = this.selectedItems;
        this._highlightedItem = selectedItems[0];
      }

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

  private getTargetHTMLElement(): HTMLElement {
    if (this.target instanceof ElementRef) {
      return this.target.nativeElement;
    } else if (this.target instanceof HTMLElement) {
      return this.target;
    } else {
      if (this.target && this.target.elementRef && this.target.elementRef.nativeElement) {
        return this.target.elementRef.nativeElement;
      }
      throw new Error('INVALID_DROPDOWN_TARGET');
    }
  }

  open(opts?: DropdownOptions): Observable<DropdownAction> {
    if (this.isAttached) {
      this.detach();
    }

    this._actionEmitter = new Subject();

    if (opts) {
      this.target = opts.target || this.target;
      this.offClickExcludes = opts.offClickExcludes || this.offClickExcludes;
      this.value = opts.value === undefined ? this.value : opts.value;
      this.selectionMode = opts.selectionMode || this.selectionMode;
      this.width = opts.width || this.width;
      this.height = opts.height || this.height;
      this.maxHeight = opts.maxHeight || this.maxHeight;
    }

    const target = this.getTargetHTMLElement();

    const config = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this._dir,
      width: this.width !== undefined ? this.width : target.getBoundingClientRect().width,
      height: this.height,
      maxHeight: this.maxHeight || '20em',
      panelClass: ['vclDropdown', 'vclOpen'],
      positionStrategy: this.overlay.position()
      .connectedTo(target as any, {
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
          createOffClickStream([this.overlayRef.overlayElement, this.target, ...(this.offClickExcludes || [])], {
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
    this._highlightedItem = undefined;

    this._actionEmitter && this._actionEmitter.next({
      type: 'close',
      selectedItems: this.selectedItems
    });
    this._actionEmitter && this._actionEmitter.complete();

    this.afterClose.emit(this.value);
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
