import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'vcl-dropdown-header',
  exportAs: 'vclDropdownHeader',
  styles: [],
  templateUrl: 'dropdown-header.component.html'
})
export class DropdownHeaderComponent {
  @HostBinding('class.vclDropdownItemGroupHeader')
  classVCLDropdownItemGroupHeader = true;

  // TODO: Find appropriate role
  // @HostBinding('attr.role')
  // attrRole = 'menuitem';
}
