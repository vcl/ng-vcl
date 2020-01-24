import { HostBinding, Input, Component, Inject, HostListener, Directive, ContentChild, ElementRef, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { SelectList, SELECT_LIST_TOKEN, SelectListItem, SELECT_LIST_CONTENT_TOKEN } from '../types';

@Component({
  selector: 'vcl-select-list-label',
  template: '<ng-content></ng-content>',
  exportAs: 'vclSelectListLabel'
})
export class SelectListLabelComponent {
  @HostBinding('class.dropdown-item-label')
  _hostClasses = true;
}

@Component({
  selector: 'vcl-select-list-sublabel',
  template: '<ng-content></ng-content>',
  exportAs: 'vclSelectListSublabel'
})
export class SelectListSublabelComponent {
  @HostBinding('class.dropdown-item-sub-label')
  _hostClasses = true;
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

  @HostBinding('class.dropdown-item')
  _hostClasses = true;

  @HostBinding('attr.role')
  attrRole = 'menuitem';

  @HostBinding('attr.tabindex')
  attrTabindex = 0;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabled;
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

  @ContentChild(SelectListLabelComponent, { read: ElementRef })
  _labelElementRef?: ElementRef<HTMLElement>;

  get label() {
    return this._label || (this._labelElementRef ? this._labelElementRef.nativeElement.innerText : (this.elementRef.nativeElement.innerText || ''));
  }

  @HostListener('click')
  onClick() {
    this.selectList.selectItem(this);
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
    if (event.keyCode === ENTER) {
      this.selectList.selectItem(this);
    }
  }

}
