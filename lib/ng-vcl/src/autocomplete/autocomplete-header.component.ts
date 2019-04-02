import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'vcl-autocomplete-header',
  exportAs: 'vclAutocompleteHeader',
  styles: [],
  templateUrl: 'autocomplete-header.component.html'
})
export class AutocompleteHeaderComponent {
  // TODO: Workaround
  @HostBinding('style.display')
  styleDisplay = 'block';

  @HostBinding('class.vclDropdownItemGroupHeader')
  classVCLDropdownItemGroupHeader = true;

  // TODO: Find appropriate role
  // @HostBinding('attr.role')
  // attrRole = 'menuitem';
}
