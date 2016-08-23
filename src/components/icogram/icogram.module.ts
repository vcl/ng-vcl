import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcogramComponent } from './icogram.component';
import { VCLIconModule } from '../icon/icon.module';

import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, VCLIconModule, L10nModule],
  exports: [IcogramComponent],
  declarations: [IcogramComponent],
  providers: [],
})
export class VCLIcogramModule { }
