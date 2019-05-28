import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLInputModule } from '../input/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLSelectListModule } from '../select-list/index';

import { AutocompleteComponent, AutocompleteConfig } from './autocomplete.component';
import { AutocompleteInputDirective } from './autocomplete-input.directive';

export { AutocompleteComponent, AutocompleteConfig, AutocompleteInputDirective };

@NgModule({
  imports: [CommonModule, OverlayModule, VCLInputModule, VCLIconModule, VCLIcogramModule, VCLButtonModule, VCLSelectListModule],
  exports: [AutocompleteComponent, AutocompleteInputDirective, VCLSelectListModule],
  declarations: [AutocompleteComponent, AutocompleteInputDirective],
  providers: [],
})
export class VCLAutocompleteModule { }
