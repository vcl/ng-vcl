import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLIcogramModule } from '../icogram/index';

import { TokenComponent } from './token.component';
import { TokenInputContainerComponent, TokenInputLabelPostDirective, TokenInputLabelPreDirective, TokenInputDirective } from './token-input.component';
import { TokenListComponent } from './token-list.component';
import { Token } from './interfaces';

export { TokenComponent, TokenInputContainerComponent, TokenInputDirective, TokenListComponent, Token };

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLButtonModule, FormsModule, VCLIconModule, VCLIcogramModule],
  exports: [TokenComponent, TokenListComponent, TokenInputContainerComponent, TokenInputDirective, TokenInputLabelPostDirective, TokenInputLabelPreDirective],
  declarations: [TokenComponent, TokenListComponent, TokenInputContainerComponent, TokenInputDirective, TokenInputLabelPostDirective, TokenInputLabelPreDirective],
  providers: [],
})
export class VCLTokenModule { }
