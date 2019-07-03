import { EventEmitter, forwardRef, QueryList, Input, Output, ContentChildren, HostBinding, AfterContentInit, OnDestroy, Optional, Inject, Component, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent, FormControlInput, FORM_CONTROL_INPUT } from '../form-control-group/index';
import { SELECT_LIST_TOKEN, SelectList, SelectListItem, SELECT_LIST_CONTENT_TOKEN } from './types';
import { SelectListItemComponent } from './components/select-list-item.component';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-select-list',
  template: '<ng-content></ng-content>',
  exportAs: 'vclSelectList',
  providers: [
    {
      provide: SELECT_LIST_TOKEN,
      useExisting: forwardRef(() => SelectListComponent)
    },
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => SelectListComponent)
    }
  ]
})
export class SelectListComponent implements SelectList, AfterContentInit, OnDestroy, ControlValueAccessor, FormControlInput {
  constructor(
    private cdRef: ChangeDetectorRef,
    @Optional()
    public ngControl?: NgControl,
    @Optional()
    @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Optional()
    @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
    ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private _cvaDisabled = false;
  private generatedId = 'vcl_select_list_' + UNIQUE_ID++;
  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();
  controlType = 'slider';

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @HostBinding('class.vclDropdown')
  @HostBinding('class.vclOpen')
  _hostClasses = true;

  private _itemsChangeSub?: Subscription;
  private _highlightedItem: SelectListItem;
  private _itemsChangeEmitter: Subject<void> = new Subject();

  readonly itemsChange = this._itemsChangeEmitter.asObservable();

  @Input()
  selectionMode: 'single' | 'multiple' = 'single';

  @Input()
  value: any | any[];

  @Input()
  disabled = false;

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @Output()
  valueChange =  new EventEmitter<any | any[]>();

  @ContentChildren(SelectListItemComponent)
  private _items?: QueryList<SelectListItem>;

  @ContentChildren(SELECT_LIST_CONTENT_TOKEN as any)
  private _content?: QueryList<any>;

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

  @HostBinding('class.vclError')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
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

  isItemHighlighted(item: SelectListItem): boolean {
    return item === this._highlightedItem;
  }

  isItemSelected(item: SelectListItem): boolean {
    return this._valueAsArray.includes(item.value);
  }

  selectHighlighted(): void {
    if (this._highlightedItem) {
      this.selectItem(this._highlightedItem);
    }
  }

  selectItem(item: SelectListItem): void {
    if (this.selectionMode === 'single') {
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
    this.stateChangedEmitter.next();
    this.onTouched();
    this.onChange(this.value);
  }

  onLabelClick(event: Event): void {

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
    return this._items.filter(_item => this._valueAsArray.includes(_item.value));
  }

  highlight(value: any) {
    this._highlightedItem = this._items.find((item) => item.value === value);
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
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

  ngAfterContentInit() {
    this._itemsChangeSub = this._items.changes.subscribe(this._itemsChangeEmitter);
  }

  ngOnDestroy() {
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
    this._itemsChangeSub && this._itemsChangeSub.unsubscribe();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
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
