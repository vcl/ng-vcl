import { HostBinding, Input, Component, Inject, HostListener, Directive, ContentChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Dropdown, DROPDOWN_TOKEN, DropdownItem } from '../types';

@Directive({
  selector: 'vcl-dropdown-label',
  exportAs: 'vclDropdownLabel'
})
export class DropdownLabelDirective {
  @HostBinding('class.vclDropdownItemLabel')
  classVCLDropdownItemSubLabel = true;
}

@Directive({
  selector: 'vcl-dropdown-sublabel',
  exportAs: 'vclDropdownSublabel'
})
export class DropdownSublabelDirective {
  @HostBinding('class.vclDropdownItemSubLabel')
  classVCLDropdownItemSubLabel = true;
}

@Component({
  selector: 'vcl-dropdown-item',
  exportAs: 'vclDropdownItem',
  templateUrl: 'dropdown-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownItemComponent implements DropdownItem {

  constructor(
    @Inject(DROPDOWN_TOKEN)
    private dropdown: Dropdown,
    private elementRef: ElementRef<HTMLElement>
  ) { }

  @HostBinding('class.vclDropdownItem')
  classVCLDropdownItem = true;

  @HostBinding('attr.role')
  attrRole = 'menuitem';

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.disabled;
  }

  @HostBinding('class.vclHighlighted')
  get isHighlighted() {
    return this.dropdown.isItemHighlighted(this);
  }

  @HostBinding('class.vclSelected')
  get isSelected() {
    return this.dropdown.isItemSelected(this);
  }

  @Input()
  disabled = false;

  @Input()
  value: any;

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  _label?: string;

  @ContentChild(DropdownLabelDirective, { read: ElementRef})
  _labelElementRef?: ElementRef<HTMLElement>;

  get label() {
    return this._label || (this._labelElementRef ? this._labelElementRef.nativeElement.innerText : (this.elementRef.nativeElement.innerText || ''));
  }

  @HostListener('click')
  onclick() {
    this.dropdown.selectItem(this);
  }
}
