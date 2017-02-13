import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLMetalistModule } from '../metalist/metalist.module';
import { L10nModule } from '../l10n/l10n.module';
import { FormsModule }   from '@angular/forms';

import { TokenComponent } from './token.component';
import { TokenListComponent } from './token-list.component';
import { TokenInputComponent } from './token-input.component';


@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule, FormsModule],
  exports: [TokenComponent, TokenListComponent, TokenInputComponent],
  declarations: [TokenComponent, TokenListComponent, TokenInputComponent],
  providers: [],
})
export class VCLTokenModule { }
