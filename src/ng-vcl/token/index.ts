import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLMetalistModule } from '../metalist/index';
import { L10nModule } from '../l10n/index';
import { FormsModule }   from '@angular/forms';

import { TokenComponent } from './token.component';
import { TokenListComponent } from './token-list.component';
import { TokenInputComponent } from './token-input.component';

export { TokenComponent, TokenInputComponent, TokenListComponent };

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule, FormsModule],
  exports: [TokenComponent, TokenListComponent, TokenInputComponent],
  declarations: [TokenComponent, TokenListComponent, TokenInputComponent],
  providers: [],
})
export class VCLTokenModule { }
