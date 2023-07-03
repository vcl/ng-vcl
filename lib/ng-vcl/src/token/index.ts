import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VCLButtonModule } from '../button/index';
import { VCLIcogramModule } from '../icogram/index';
import { VCLIconModule } from '../icon/index';
import { VCLInputModule } from '../input/index';

import { Token } from './interfaces';
import { TokenInputContainerComponent } from './token-input.component';
import { TokenListComponent } from './token-list.component';
import { TokenComponent } from './token.component';

export {
  TokenComponent,
  TokenInputContainerComponent,
  TokenListComponent,
  Token,
};

@NgModule({
  imports: [
    CommonModule,
    VCLInputModule,
    VCLButtonModule,
    FormsModule,
    VCLIconModule,
    VCLIcogramModule,
  ],
  exports: [
    TokenComponent,
    TokenListComponent,
    TokenInputContainerComponent,
    VCLInputModule,
  ],
  declarations: [
    TokenComponent,
    TokenListComponent,
    TokenInputContainerComponent,
  ],
  providers: [],
})
export class VCLTokenModule {}
