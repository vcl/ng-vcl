import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIconModule } from '../icon/index';
import { L10nModule } from '../l10n/index';
import { IcogramComponent } from './icogram.component';

export { IcogramComponent };

@NgModule({
  imports: [CommonModule, VCLIconModule, L10nModule],
  exports: [IcogramComponent],
  declarations: [IcogramComponent],
  providers: [],
})
export class VCLIcogramModule { }
