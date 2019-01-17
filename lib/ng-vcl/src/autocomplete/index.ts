import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VCLPopoverModule } from '../popover/index';
import { VCLInputModule } from '../input/index';
import { VCLTokenModule } from '../token/index';

import { AutocompleteComponent, AutocompleteOptionDirective, AutocompleteContentComponent } from './autocomplete.component';
import { InputAutocompleteDirective } from './input.autocomplete.directive';
import { TokenInputAutocompleteDirective } from './token-input.autocomplete.directive';

export { AutocompleteComponent, AutocompleteOptionDirective, AutocompleteContentComponent, InputAutocompleteDirective, TokenInputAutocompleteDirective };

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLPopoverModule, VCLTokenModule],
  exports: [InputAutocompleteDirective, AutocompleteComponent, AutocompleteOptionDirective, AutocompleteContentComponent, TokenInputAutocompleteDirective],
  declarations: [InputAutocompleteDirective, AutocompleteComponent, AutocompleteOptionDirective, AutocompleteContentComponent, TokenInputAutocompleteDirective],
  providers: [],
})
export class VCLAutocompleteModule { }
