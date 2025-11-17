import {
  HostBinding,
  Input,
  Component,
  Inject,
  HostListener,
  ContentChild,
  ElementRef,
  ChangeDetectionStrategy,
  forwardRef,
  ViewChild,
} from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import {
  SelectList,
  SELECT_LIST_TOKEN,
  SelectListItem,
  SELECT_LIST_CONTENT_TOKEN,
} from '../types';
import { VCLLabelDirective, VCLSubLabelDirective } from '../../core/index';

@Component({
  selector: 'vcl-select-list-item',
  exportAs: 'vclSelectListItem',
  templateUrl: 'select-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: SELECT_LIST_CONTENT_TOKEN,
      useExisting: forwardRef(() => SelectListItemComponent),
    },
  ],
})
export class SelectListItemComponent implements SelectListItem {
  constructor(
    @Inject(SELECT_LIST_TOKEN)
    private selectList: SelectList,
    private elementRef: ElementRef<HTMLElement>
  ) {}

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
    return this.selectList.isItemHighlighted(this);
  }

  get isFocused() {
    return this._focused;
  }

  @HostBinding('class.selected')
  get isSelected() {
    return this.selectList.isItemSelected(this);
  }

  @HostBinding('class.hide')
  get isHidden() {
    return this.selectList.isItemHidden(this);
  }

  @Input()
  disabled = false;

  @Input()
  value: any;

  @Input()
  searchValue?: string;

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  _label?: string;

  @ContentChild(VCLLabelDirective, { read: VCLLabelDirective })
  _labelDirective?: VCLLabelDirective;

  @ViewChild('label', { read: ElementRef })
  _labelElementRef?: ElementRef<HTMLElement>;

  @ContentChild(VCLSubLabelDirective)
  _subLabel: VCLSubLabelDirective;

  get label() {
    if (this._label) {
      return this._label;
    } else if (this._labelDirective) {
      return this._labelDirective.label;
    } else if (this._labelElementRef) {
      // Trim is required due to template induced white spaces
      return this._labelElementRef.nativeElement.innerText.trim();
    } else {
      return this.elementRef.nativeElement.innerText || '';
    }
  }

  get subLabel() {
    if (this._subLabel) {
      return this._subLabel.label;
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

  scrollIntoView() {
    this.elementRef.nativeElement.scrollIntoView();
  }
}
