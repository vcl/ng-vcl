import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent, TokenListComponent } from './token.component';
import { VCLMetalistModule } from '../metalist/metalist.module';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLMetalistModule],
  exports: [TokenComponent, TokenListComponent],
  declarations: [TokenComponent, TokenListComponent],
  providers: [],
})
export class VCLTokenModule { }
