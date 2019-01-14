import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLWormholeModule } from '../wormhole/index';
import { VCLIcogramModule } from '../icogram/index';

import { TokenComponent, Token } from './token.component';
import { TokenListComponent } from './token-list.component';
import { TokenInputContainerComponent, TokenInputLabelPost, TokenInputLabelPre, TokenInputDirective } from './token-input.component';

export { TokenComponent, TokenInputContainerComponent, TokenInputDirective, TokenListComponent, Token };

@NgModule({
  imports: [CommonModule, VCLInputModule, VCLButtonModule, FormsModule, VCLIconModule, VCLIcogramModule, VCLWormholeModule],
  exports: [TokenComponent, TokenListComponent, TokenInputContainerComponent, TokenInputDirective, TokenInputLabelPost, TokenInputLabelPre],
  declarations: [TokenComponent, TokenListComponent, TokenInputContainerComponent, TokenInputDirective, TokenInputLabelPost, TokenInputLabelPre],
  providers: [],
})
export class VCLTokenModule { }
