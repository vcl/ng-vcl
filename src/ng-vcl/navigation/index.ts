import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLLinkModule } from '../link/index';
import { L10nModule } from '../l10n/index';
import { NavigationComponent, NavigationItem, NavigationItemDirective } from './navigation.component';

export { NavigationComponent, NavigationItem, NavigationItemDirective };

@NgModule({
  imports: [CommonModule, L10nModule, VCLLinkModule],
  exports: [NavigationComponent, NavigationItemDirective],
  declarations: [NavigationComponent, NavigationItemDirective],
  providers: [],
})
export class VCLNavigationModule { }
