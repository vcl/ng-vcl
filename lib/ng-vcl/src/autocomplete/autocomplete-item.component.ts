import { HostBinding, Input, Component, Inject, HostListener } from '@angular/core';
import { AUTOCOMPLETE_TOKEN, AutocompleteHost, AutocompleteItem } from './interfaces';

@Component({
  selector: 'vcl-autocomplete-item',
  exportAs: 'vclAutocompleteItem',
  styles: [],
  templateUrl: 'autocomplete-item.component.html'
})
export class AutocompleteItemComponent implements AutocompleteItem {

  constructor(
    @Inject(AUTOCOMPLETE_TOKEN)
    private host: AutocompleteHost
  ) { }

  // TODO: Workaround
  @HostBinding('style.display')
  styleDisplay = 'block';

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
    return this.host.isItemHighlighted(this);
  }

  @Input()
  disabled = false;

  @Input()
  value: any;

  @HostListener('click')
  onclick() {
    this.host.selectItem(this);
  }
}
