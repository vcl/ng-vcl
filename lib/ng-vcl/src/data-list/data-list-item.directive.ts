import { HostBinding, Input, Inject, HostListener, forwardRef, ChangeDetectorRef, OnDestroy, Directive } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { DataList, DATA_LIST_TOKEN, DataListItem, DATA_LIST_ITEM_TOKEN } from './types';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'vcl-data-list-item',
  exportAs: 'vclDataListItem',
  providers: [{
    provide: DATA_LIST_ITEM_TOKEN,
    useExisting: forwardRef(() => DataListItemDirective)
  }]
})
export class DataListItemDirective implements DataListItem, OnDestroy {

  constructor(
    @Inject(DATA_LIST_TOKEN)
    private dataList: DataList,
    private cdRef: ChangeDetectorRef
  ) { }

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

  private sub?: Subscription;

  @HostBinding('class.selectable')
  get classSelectable() {
    return !this.isDisabled;
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

  ngOnInit(): void {
    this.selected = this.dataList.isItemSelected(this);
    this.sub = this.dataList.stateChange.subscribe(() => {
      this.selected = this.dataList.isItemSelected(this);
      this.cdRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
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
}
