import { ButtonStateContentDirective } from './button-state-content.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { VCLIcogramModule } from '../icogram/index';
import { L10nModule } from '../l10n/index';

export { ButtonComponent, ButtonStateContentDirective };

@NgModule({
  imports: [CommonModule, VCLIcogramModule, L10nModule],
  exports: [ButtonComponent, ButtonStateContentDirective],
  declarations: [ButtonComponent, ButtonStateContentDirective],
  providers: [],
})
export class VCLButtonModule { }
