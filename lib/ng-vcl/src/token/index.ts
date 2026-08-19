import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VCLIconModule } from '../icon/index';

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
    VCLTokenComponent,
    VCLTokenListComponent,
    VCLTokenInputContainerComponent,
  ],
  exports: [
    VCLTokenComponent,
    VCLTokenListComponent,
    VCLTokenInputContainerComponent,
  ],
})
export class VCLTokenModule {}
