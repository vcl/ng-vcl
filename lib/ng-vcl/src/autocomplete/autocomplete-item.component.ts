import { HostBinding, Input, Component, Inject, HostListener } from '@angular/core';
import { AUTOCOMPLETE_TOKEN, AutocompleteHost, AutocompleteResult } from './interfaces';

@Component({
  selector: 'vcl-autocomplete-item',
  exportAs: 'vclAutocompleteItem',
  styles: [],
  templateUrl: 'autocomplete-item.component.html'
})
export class AutocompleteItemComponent implements AutocompleteResult {

  constructor(
    @Inject(AUTOCOMPLETE_TOKEN)
    private host: AutocompleteHost
  ) { }

  @HostBinding('class.vclDropdownItem')
  classVCLDropdownItem = true;

  @HostBinding('attr.role')
  attrRole = 'menuitem';

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.disabled || this.host.disabled;
  }

  @HostBinding('class.vclHighlighted')
  get isHighlighted() {
    return this.host.highlightedItem === this;
  }

  @Input()
  disabled = false;

  @Input()
  value: any;

  @Input()
  label: string;

  @HostListener('click')
  onclick() {
    if (this.host.target) {
      this.host.target.select(this);
    }
  }
}
