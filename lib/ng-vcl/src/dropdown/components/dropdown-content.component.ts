import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vcl-dropdown-content',
  exportAs: 'vclDropdownContent',
  templateUrl: 'dropdown-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownContentComponent {

}
