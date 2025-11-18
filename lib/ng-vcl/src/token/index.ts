import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLIcogramModule } from '../icogram/index';

import { VCLTokenComponent } from './token.component';
import { VCLTokenInputContainerComponent } from './token-input.component';
import { VCLTokenListComponent } from './token-list.component';
import { Token } from './interfaces';

export {
  VCLTokenComponent,
  VCLTokenInputContainerComponent,
  VCLTokenListComponent,
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
    VCLTokenComponent,
    VCLTokenListComponent,
    VCLTokenInputContainerComponent,
  ],
  exports: [
    VCLTokenComponent,
    VCLTokenListComponent,
    VCLTokenInputContainerComponent,
    VCLInputModule,
  ],
})
export class VCLTokenModule {}
