import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonContentDirective } from './button.component';
import { VCLIcogramModule } from '../icogram/icogram.module';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, VCLIcogramModule, L10nModule],
  exports: [ButtonComponent, ButtonContentDirective],
  declarations: [ButtonComponent, ButtonContentDirective],
  providers: [],
})
export class VCLButtonModule { }
