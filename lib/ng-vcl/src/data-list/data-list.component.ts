import { EventEmitter, forwardRef, QueryList, Input, Output, ContentChildren, HostBinding, AfterContentInit, OnDestroy, Optional, Inject, Component, ChangeDetectorRef, Directive } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { DATA_LIST_TOKEN, DataList, DataListItem } from './types';
import { DataListItemComponent } from './data-list-item.component';

@Directive({
  selector: 'vcl-data-list-header',
})
export class DataListHeaderDirective {
  @HostBinding('class.data-list-header')
  hostClasses = true;
}

@Directive({
  selector: 'vcl-data-list-footer',
})
export class DataListFooterDirective {
  @HostBinding('class.data-list-footer')
  hostClasses = true;
}

@Component({
  selector: 'vcl-data-list',
  templateUrl: './data-list.component.html',
  exportAs: 'vclDataList',
  providers: [
    {
      provide: DATA_LIST_TOKEN,
      useExisting: forwardRef(() => DataListComponent)
    }
  ]
})
export class DataListComponent implements DataList, AfterContentInit, OnDestroy, ControlValueAccessor {
  constructor(
    private cdRef: ChangeDetectorRef,
    @Optional()
    public ngControl?: NgControl,
    ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private _cvaDisabled = false;

  @HostBinding('class.item-selectability')
  @HostBinding('class.item-hover-highlight')
  get classItemSelectability() {
    return this.selectionMode !== 'none';
  }

  @HostBinding('class.data-list')
  _hostClasses = true;

  private _itemsChangeSub?: Subscription;
  private _itemsChangeEmitter: Subject<void> = new Subject();

  readonly itemsChange = this._itemsChangeEmitter.asObservable();

  @Input()
  selectionMode: 'single' | 'multiple' | 'none' = 'single';

  @Input()
  value: any | any[];

  @Input()
  disabled = false;

  @Input()
  @HostBinding('class.divider')
  dividier = false;

  @Input()
  @HostBinding('class.no-border')
  noBorder = false;

  @Output()
  valueChange =  new EventEmitter<any | any[]>();

  @ContentChildren(DataListItemComponent)
  private _items?: QueryList<DataListItem>;

  get isDisabled() {
    return this._cvaDisabled || this.disabled;
  }

  get isFocused() {
    return this.items.some(item => item.isFocused);
  }

  get items() {
    return this._items.toArray();
  }

  private get _valueAsArray() {
    if (Array.isArray(this.value)) {
      return this.value;
    } else {
      if (this.selectionMode === 'single') {
        return [this.value];
      } else if (this.selectionMode === 'multiple') {
        return [this.value];
      } else {
        return [];
      }
    }
  }

  isItemSelected(item: DataListItem): boolean {
    return this._valueAsArray.includes(item.value);
  }

  selectItem(item: DataListItem): void {
    if (this.selectionMode === 'none') {
      return;
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
    this.onTouched();
    this.onChange(this.value);
  }

  onLabelClick(event: Event): void {

  }

  onItemFocus(item: DataListItem) {
  }

  onItemBlur(item: DataListItem) {
    if (this._items.last === item) {
      this.onTouched();
    }
  }

  get selectedItems() {
    return this._items.filter(_item => this._valueAsArray.includes(_item.value));
  }

  getItems() {
    return this._items.toArray();
  }

  ngAfterContentInit() {
    this._itemsChangeSub = this._items.changes.subscribe(this._itemsChangeEmitter);
  }

  ngOnDestroy() {
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
