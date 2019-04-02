import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VCLPopoverModule } from '../popover/index';
import { VCLInputModule } from '../input/index';
import { VCLTokenModule } from '../token/index';

import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteItemComponent } from './autocomplete-item.component';
import { AutocompleteSeperatorComponent } from './autocomplete-seperator.component';
import { AutocompleteHeaderComponent } from './autocomplete-header.component';
import { InputAutocompleteDirective } from './input.autocomplete.directive';
import { TokenInputAutocompleteDirective } from './token-input.autocomplete.directive';

export { AutocompleteComponent, AutocompleteItemComponent, AutocompleteSeperatorComponent, AutocompleteHeaderComponent, InputAutocompleteDirective, TokenInputAutocompleteDirective };

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLPopoverModule, VCLTokenModule],
  exports: [InputAutocompleteDirective, TokenInputAutocompleteDirective, AutocompleteComponent, AutocompleteItemComponent, AutocompleteSeperatorComponent, AutocompleteHeaderComponent],
  declarations: [InputAutocompleteDirective, TokenInputAutocompleteDirective, AutocompleteComponent, AutocompleteItemComponent, AutocompleteSeperatorComponent, AutocompleteHeaderComponent],
  providers: [],
})
export class VCLAutocompleteModule { }
