import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { L10nModule } from '../l10n/index';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';

import { TokenComponent } from './token.component';
import { TokenListComponent } from './token-list.component';
import { TokenInputComponent } from './token-input.component';

export { TokenComponent, TokenInputComponent, TokenListComponent };

@NgModule({
  imports: [CommonModule, L10nModule, VCLInputModule, VCLButtonModule, FormsModule, VCLIconModule],
  exports: [TokenComponent, TokenListComponent, TokenInputComponent],
  declarations: [TokenComponent, TokenListComponent, TokenInputComponent],
  providers: [],
})
export class VCLTokenModule { }
