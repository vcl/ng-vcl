import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VCLWormholeModule } from './../wormhole/index';
import { VCLPopoverModule } from '../popover/index';
import { VCLInputModule }   from '../input/index';
import { VCLTokenModule }   from '../token/index';
import { VCLOffClickModule }   from '../off-click/index';

import { Autocomplete, AutocompleteOption }   from './autocomplete.component';
import { InputAutocompleteDirective } from './input.autocomplete.directive';
import { TokenInputAutocompleteDirective } from './token-input.autocomplete.directive';

export { Autocomplete, AutocompleteOption, InputAutocompleteDirective, TokenInputAutocompleteDirective };

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLWormholeModule, VCLPopoverModule, VCLTokenModule, VCLOffClickModule],
  exports: [InputAutocompleteDirective, Autocomplete, AutocompleteOption, TokenInputAutocompleteDirective],
  declarations: [InputAutocompleteDirective, Autocomplete, AutocompleteOption, TokenInputAutocompleteDirective],
  providers: [],
})
export class VCLAutocompleteModule { }
