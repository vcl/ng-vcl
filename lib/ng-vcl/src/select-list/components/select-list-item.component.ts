import { HostBinding, Input, Component, Inject, HostListener, Directive, ContentChild, ElementRef, ChangeDetectionStrategy, forwardRef, ViewChild } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { SelectList, SELECT_LIST_TOKEN, SelectListItem, SELECT_LIST_CONTENT_TOKEN } from '../types';
import { LabelDirective } from '../../core';

@Directive({
  selector: 'vcl-select-list-label',
})
export class SelectListLabelDirective {
  ngOnInit() {
    console.warn('vcl-select-list-label is deprecated. Use vcl-label instead');
  }
}

@Directive({
  selector: 'vcl-select-list-sublabel',
})
export class SelectListSublabelDirective { 
  ngOnInit() {
    console.warn('vcl-select-list-sublabel is deprecated. Use vcl-sub-label instead');
  }
}

@Component({
  selector: 'vcl-select-list-item',
  exportAs: 'vclSelectListItem',
  templateUrl: 'select-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: SELECT_LIST_CONTENT_TOKEN,
    useExisting: forwardRef(() => SelectListItemComponent)
  }]
})
export class SelectListItemComponent implements SelectListItem {

  constructor(
    @Inject(SELECT_LIST_TOKEN)
    private selectList: SelectList,
    private elementRef: ElementRef<HTMLElement>
  ) { }

  private _focused = false;

  @HostBinding('class.select-list-item')
  _hostClasses = true;

  @HostBinding('attr.role')
  attrRole = 'menuitem';

  @HostBinding('attr.tabindex')
  attrTabindex = 0;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabled || this.selectList.isDisabled;
  }

  @HostBinding('class.highlighted')
  get isHighlighted() {
    return this.isFocused || this.selectList.isItemHighlighted(this);
  }

  get isFocused() {
    return this._focused;
  }

  @HostBinding('class.selected')
  get isSelected() {
    return this.selectList.isItemSelected(this);
  }

  @Input()
  disabled = false;

  @Input()
  value: any;

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  _label?: string;

  @ContentChild(LabelDirective, { read: LabelDirective })
  _labelDirective?: LabelDirective;
  
  @ViewChild('label', { read: ElementRef })
  _labelElementRef?: ElementRef<HTMLElement>;

  get label() {
    if (this._label) {
      return this._label;
    } else if (this._labelDirective) {
      return this._labelDirective.label;
    } else if (this._labelElementRef) {
      return this._labelElementRef.nativeElement.innerText;
    } else {
      return this.elementRef.nativeElement.innerText || ''
    }
  }

  @HostListener('click')
  onClick() {
    if (!this.isDisabled) {
      this.selectList.selectItem(this);
    }
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    this.selectList.onItemFocus(this);
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.selectList.onItemBlur(this);
  }

  @HostListener('keypress', ['$event'])
  onKeypress(event: KeyboardEvent) {
    if (!this.isDisabled && event.keyCode === ENTER) {
      this.selectList.selectItem(this);
    }
  }

}
