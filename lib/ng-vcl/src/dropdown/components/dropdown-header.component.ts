import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vcl-dropdown-header',
  exportAs: 'vclDropdownHeader',
  templateUrl: 'dropdown-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropdownHeaderComponent {
  @HostBinding('class.vclDropdownItemGroupHeader')
  classVCLDropdownItemGroupHeader = true;
}
