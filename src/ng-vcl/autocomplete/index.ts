import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VCLPopoverModule } from '../popover/index';
import { VCLInputModule }   from '../input/index';
import { VCLTokenModule }   from '../token/index';

import { Autocomplete, AutocompleteOption, AutocompleteContent }   from './autocomplete.component';
import { InputAutocompleteDirective } from './input.autocomplete.directive';
import { TokenInputAutocompleteDirective } from './token-input.autocomplete.directive';

export { Autocomplete, AutocompleteOption, AutocompleteContent, InputAutocompleteDirective, TokenInputAutocompleteDirective };

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLPopoverModule, VCLTokenModule],
  exports: [InputAutocompleteDirective, Autocomplete, AutocompleteOption, AutocompleteContent, TokenInputAutocompleteDirective],
  declarations: [InputAutocompleteDirective, Autocomplete, AutocompleteOption, AutocompleteContent, TokenInputAutocompleteDirective],
  providers: [],
})
export class VCLAutocompleteModule { }
