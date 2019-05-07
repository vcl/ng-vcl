import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vcl-dropdown-seperator',
  exportAs: 'vclDropdownSeperator',
  templateUrl: 'dropdown-seperator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownSeperatorComponent {
  @HostBinding('attr.role')
  attrRole = 'seperator';
}
