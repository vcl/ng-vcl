import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'vcl-dropdown-seperator',
  exportAs: 'vclDropdownSeperator',
  styles: [],
  templateUrl: 'dropdown-seperator.component.html'
})
export class DropdownSeperatorComponent {
  @HostBinding('attr.role')
  attrRole = 'seperator';
}
