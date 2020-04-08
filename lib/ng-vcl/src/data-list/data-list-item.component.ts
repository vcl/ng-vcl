import { HostBinding, Input, Component, Inject, HostListener, Directive, ContentChild, ElementRef, ChangeDetectionStrategy, forwardRef, ViewChild } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { DataList, DATA_LIST_TOKEN, DataListItem, DATA_LIST_ITEM_TOKEN } from './types';

@Component({
  selector: 'vcl-data-list-item',
  exportAs: 'vclDataListItem',
  templateUrl: 'data-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: DATA_LIST_ITEM_TOKEN,
    useExisting: forwardRef(() => DataListItemComponent)
  }]
})
export class DataListItemComponent implements DataListItem {

  constructor(
    @Inject(DATA_LIST_TOKEN)
    private dataList: DataList,
  ) { }

  private _focused = false;

  @HostBinding('class.data-list-item')
  _hostClasses = true;

  @HostBinding('attr.role')
  attrRole = 'option';

  @HostBinding('attr.tabindex')
  attrTabindex = 0;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabled || this.dataList.isDisabled;
  }

  get isFocused() {
    return this._focused;
  }

  @HostBinding('class.selected')
  get isSelected() {
    return this.dataList.isItemSelected(this);
  }

  @Input()
  disabled = false;

  @Input()
  value: any;


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
