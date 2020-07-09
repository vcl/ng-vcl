import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLSelectListModule } from '../select-list/index';

import { AutocompleteDirective, AutocompleteSelectListDirective, AutocompleteConfig } from './autocomplete.directive';
import { AutocompleteInputDirective } from './autocomplete-input.directive';

export { AutocompleteDirective, AutocompleteSelectListDirective, AutocompleteConfig, AutocompleteInputDirective };

@NgModule({
  imports: [CommonModule, OverlayModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLSelectListModule],
  exports: [AutocompleteDirective, AutocompleteSelectListDirective, AutocompleteInputDirective, VCLSelectListModule],
  declarations: [AutocompleteDirective, AutocompleteSelectListDirective, AutocompleteInputDirective],
  providers: [],
})
export class VCLAutocompleteModule { }
