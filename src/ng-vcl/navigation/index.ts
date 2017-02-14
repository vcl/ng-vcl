import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent, NavigationItemComponent } from './navigation.component';
import { VCLLinkModule } from '../link/index';
import { L10nModule } from '../l10n/index';

@NgModule({
  imports: [CommonModule, L10nModule, VCLLinkModule],
  exports: [NavigationComponent, NavigationItemComponent],
  declarations: [NavigationComponent, NavigationItemComponent],
  providers: [],
})
export class VCLNavigationModule { }
