import { ENTER } from '@angular/cdk/keycodes';
import {
  HostBinding,
  Input,
  Inject,
  HostListener,
  forwardRef,
  ChangeDetectorRef,
  OnDestroy,
  Directive,
  OnInit,
} from '@angular/core';
import { SubSink } from 'subsink';

import {
  DataList,
  DATA_LIST_TOKEN,
  DataListItem,
  DATA_LIST_ITEM_TOKEN,
} from './types';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'vcl-data-list-item',
  exportAs: 'vclDataListItem',
  providers: [
    {
      provide: DATA_LIST_ITEM_TOKEN,
      useExisting: forwardRef(() => DataListItemDirective),
    },
  ],
})
export class DataListItemDirective implements DataListItem, OnInit, OnDestroy {
  private _focused = false;

  @HostBinding('class.data-list-item')
  _hostClasses = true;

  @HostBinding('attr.role')
  attrRole = 'option';

  @Input()
  disabled = false;

  @Input()
  value: any;

  selected = false;

  @HostBinding('class.selectable')
  get classSelectable() {
    return !this.isDisabled && this.dataList.selectionMode !== 'none';
  }

  get isDisabled() {
    return this.disabled || this.dataList.isDisabled;
  }

  @HostBinding('attr.tabindex')
  get attrTabindex() {
    return !this.isDisabled ? 0 : undefined;
  }

  @HostBinding('class.disabled')
  get classDisabled() {
    return this.isDisabled;
  }

  @HostBinding('class.selected')
  get isSelected() {
    return !this.isDisabled && this.selected;
  }

  @HostBinding('class.focused')
  get isFocused() {
    return this._focused;
  }

  @HostListener('click')
  onClick() {
    if (!this.isDisabled) {
      this.dataList.selectItem(this);
    }
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    this.dataList.onItemFocus(this);
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.dataList.onItemBlur(this);
  }

  @HostListener('keypress', ['$event'])
  onKeypress(event: KeyboardEvent) {
    if (!this.isDisabled && event.keyCode === ENTER) {
      this.dataList.selectItem(this);
    }
  }

  private subscriptions = new SubSink();

  constructor(
    @Inject(DATA_LIST_TOKEN)
    private readonly dataList: DataList,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.selected = this.dataList.isItemSelected(this);
    this.subscriptions.sink = this.dataList.stateChange.subscribe(() => {
      this.selected = this.dataList.isItemSelected(this);
      this.cdRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
