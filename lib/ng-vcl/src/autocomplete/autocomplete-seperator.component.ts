import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'vcl-autocomplete-seperator',
  exportAs: 'vclAutocompleteSeperator',
  styles: [],
  templateUrl: 'autocomplete-seperator.component.html'
})
export class AutocompleteSeperatorComponent {
  // TODO: Workaround
  @HostBinding('style.display')
  styleDisplay = 'block';

  @HostBinding('attr.role')
  attrRole = 'seperator';
}
