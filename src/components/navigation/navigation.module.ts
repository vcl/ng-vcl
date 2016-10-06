import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { VCLLinkModule } from '../link/link.module';
import { L10nModule } from '../../l10n/l10n.module';

@NgModule({
  imports: [CommonModule, L10nModule, VCLLinkModule],
  exports: [NavigationComponent],
  declarations: [NavigationComponent],
  providers: [],
})
export class VCLNavigationModule { }
