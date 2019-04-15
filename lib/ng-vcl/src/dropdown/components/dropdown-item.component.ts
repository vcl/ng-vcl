import { HostBinding, Input, Component, Inject, HostListener } from '@angular/core';
import { Dropdown, DROPDOWN_TOKEN, DropdownItem } from '../types';

@Component({
  selector: 'vcl-dropdown-item',
  exportAs: 'vclDropdownItem',
  templateUrl: 'dropdown-item.component.html'
})
export class DropdownItemComponent implements DropdownItem {

  constructor(
    @Inject(DROPDOWN_TOKEN)
    private dropdown: Dropdown
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
  sublabel?: string;

  @Input()
  value: any;

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  _label?: string;

  @HostListener('click')
  onclick() {
    this.dropdown.selectItem(this);
  }

  get label() {
    return this._label;
  }

}
