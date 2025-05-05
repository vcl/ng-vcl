import {
  EventEmitter,
  forwardRef,
  QueryList,
  Input,
  Output,
  ContentChildren,
  HostBinding,
  AfterContentInit,
  OnDestroy,
  Component,
  ChangeDetectorRef,
  Injector,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import {
  FormControlGroupInputState,
  FORM_CONTROL_GROUP_INPUT_STATE,
} from '../form-control-group/index';
import { SELECT_LIST_TOKEN, SelectList, SelectListItem } from './types';
import { SelectListItemComponent } from './components/select-list-item.component';
import { SelectListContentComponent } from './components/select-list-content.component';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-select-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['select-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'vclSelectList',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectListComponent),
      multi: true,
    },
    {
      provide: SELECT_LIST_TOKEN,
      useExisting: forwardRef(() => SelectListComponent),
    },
    {
      provide: FORM_CONTROL_GROUP_INPUT_STATE,
      useExisting: forwardRef(() => SelectListComponent),
    },
  ],
})
export class SelectListComponent
  implements
    SelectList,
    AfterContentInit,
    OnDestroy,
    ControlValueAccessor,
    FormControlGroupInputState
{
  constructor(
    private cdRef: ChangeDetectorRef,
    private injector: Injector
  ) {}

  private _cvaDisabled = false;
  private generatedId = 'vcl_select_list_' + UNIQUE_ID++;
  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();
  controlType = 'select-list';

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @HostBinding('class.select-list')
  @HostBinding('class.open')
  _hostClasses = true;

  private _itemsChangeSub?: Subscription;
  private _highlightedItem: SelectListItem;
  private _itemsChangeEmitter: Subject<void> = new Subject();

  readonly itemsChange = this._itemsChangeEmitter.asObservable();

  @Input()
  selectionMode: 'single' | 'multiple' = 'single';

  private _value: any | any[];

  get value(): any | any[] {
    return this._value;
  }

  @Input()
  set value(value: any | any[]) {
    this._value = value;
    this.valueChange.emit(value);
  }

  @Input()
  disabled = false;

  @Input()
  search?: string;

  @Input()
  searchValue = false;

  @Output()
  valueChange = new EventEmitter<any | any[]>();

  @ContentChildren(SelectListItemComponent)
  private _items?: QueryList<SelectListItem>;

  @ContentChildren(SelectListContentComponent)
  _content: QueryList<any> | undefined;

  get hasContent() {
    return this._content && this._content.length > 0;
  }

  get isDisabled() {
    return this._cvaDisabled || this.disabled;
  }

  get isFocused() {
    return this.items.some(item => item.isFocused);
  }

  get items() {
    return this._items.toArray();
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  private get _valueAsArray() {
    if (Array.isArray(this.value)) {
      return this.value;
    } else {
      if (this.selectionMode === 'single') {
        return [this.value];
      } else {
        return [];
      }
    }
  }

  @HostBinding('class.error')
  hasError = false;

  setErrorState(error: boolean): void {
    this.hasError = error;
  }

  isItemHighlighted(item: SelectListItem): boolean {
    return item === this._highlightedItem;
  }

  isItemSelected(item: SelectListItem): boolean {
    return this._valueAsArray.includes(item.value);
  }

  isItemHidden(item: SelectListItem): boolean {
    if (this.search) {
      const searchLower = this.search.toLowerCase();
      if (
        this.searchValue &&
        item.value &&
        item.value.toLowerCase().indexOf(searchLower) >= 0
      ) {
        return false;
      } else if (
        item.label &&
        item.label.toLowerCase().indexOf(searchLower) >= 0
      ) {
        return false;
      } else if (
        item.subLabel &&
        item.subLabel.toLowerCase().indexOf(searchLower) >= 0
      ) {
        return false;
      } else if (
        item.searchValue &&
        item.searchValue.toLowerCase().indexOf(searchLower) >= 0
      ) {
        return false;
      }
      return true;
    }
    return false;
  }

  allItemsHidden(): boolean {
    return this._items && !this._items.some(item => !this.isItemHidden(item));
  }

  selectHighlighted(): void {
    if (this._highlightedItem) {
      this.selectItem(this._highlightedItem);
    }
  }

  highlightSelected(): void {
    // TODO implement highlightSelected
    // this._highlightedItem = this.selectedItems[0];
  }

  selectItem(item: SelectListItem): void {
    if (this.selectionMode === 'single') {
      this.value = item ? item.value : undefined;
    } else {
      const values = this._valueAsArray;
      if (item) {
        if (values.includes(item.value)) {
          this.value = values.filter(_value => _value !== item.value);
        } else {
          this.value = [...values, item.value];
        }
      } else {
        this.value = [];
      }
    }

    this.valueChange.emit(this.value);
    this.stateChangedEmitter.next();
    this.onTouched();
    this.onChange(this.value);
  }

  // Make sure the first selected item is visible in the scolling area
  manageScroll() {
    this.selectedItems[0]?.scrollIntoView();
  }

  onItemFocus(item: SelectListItem) {
    this.stateChangedEmitter.next();
  }

  onItemBlur(item: SelectListItem) {
    if (this._items.last === item) {
      this.onTouched();
    }
    this.stateChangedEmitter.next();
  }

  get selectedItems() {
    return this._items.filter(_item =>
      this._valueAsArray.includes(_item.value)
    );
  }

  highlight(value: any) {
    this._highlightedItem = this._items.find(item => item.value === value);
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
    this._highlightedItem && this._highlightedItem.scrollIntoView();
  }

  highlightIndex(idx: any) {
    this._highlightedItem = this._items.find((item, _idx) => idx === _idx);
    this._highlightedItem && this._highlightedItem.scrollIntoView();
  }

  highlightPrev() {
    if (this._items) {
      if (!this._highlightedItem) {
        const selectedItems = this.selectedItems;
        this._highlightedItem = selectedItems[0];
      }

      const currIdx = this._items
        .toArray()
        .findIndex(item => item === this._highlightedItem);
      if (currIdx < 0) {
        this._highlightedItem = this._items.first;
      } else {
        const highlightedItem = this._items
          .toArray()
          .reverse()
          .find((item, thisRevId, items) => {
            const thisIdx = items.length - 1 - thisRevId;
            return thisIdx < currIdx && !this.isItemHidden(item);
          });
        if (highlightedItem) {
          this._highlightedItem = highlightedItem;
        }
        this._highlightedItem.scrollIntoView();
      }
    }
  }

  highlightNext() {
    if (this._items) {
      if (!this._highlightedItem) {
        const selectedItems = this.selectedItems;
        this._highlightedItem = selectedItems[0];
      }

      const currIdx = this._items
        .toArray()
        .findIndex(item => item === this._highlightedItem);

      const highlightedItem = this._items
        .toArray()
        .find((item, thisIdx) => thisIdx > currIdx && !this.isItemHidden(item));
      if (highlightedItem) {
        this._highlightedItem = highlightedItem;
        this._highlightedItem.scrollIntoView();
      }
    }
  }

  getItems() {
    return this._items.toArray();
  }

  ngAfterContentInit() {
    this._itemsChangeSub = this._items.changes.subscribe(
      this._itemsChangeEmitter
    );
  }

  ngOnDestroy() {
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
    this._itemsChangeSub && this._itemsChangeSub.unsubscribe();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.valueChange.emit(value);
    this.stateChangedEmitter.next();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._cvaDisabled = isDisabled;
  }
}
