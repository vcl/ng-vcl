import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './button-group.component';
import { VCLButtonModule } from '../button/button.module';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, VCLButtonModule, L10nModule],
  exports: [ButtonGroupComponent],
  declarations: [ButtonGroupComponent],
  providers: [],
})
export class VCLButtonGroupModule { }
