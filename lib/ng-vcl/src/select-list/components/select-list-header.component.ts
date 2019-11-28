import { Component, HostBinding, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { SELECT_LIST_CONTENT_TOKEN } from '../types';

@Component({
  selector: 'vcl-select-list-header',
  exportAs: 'vclSelectListHeader',
  templateUrl: 'select-list-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: SELECT_LIST_CONTENT_TOKEN,
    useExisting: forwardRef(() => SelectListHeaderComponent)
  }],
  styles: [`
  :host {
    display: block
  }`]
})
export class SelectListHeaderComponent {
  @HostBinding('class.dropdown-item-group-header')
  classVCLDropdownItemGroupHeader = true;
}
