import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { NavigationComponent, NavigationItem, NavigationItemDirective } from './navigation.component';

export { NavigationComponent, NavigationItem, NavigationItemDirective };

@NgModule({
  imports: [CommonModule, VCLIcogramModule],
  exports: [NavigationComponent, NavigationItemDirective],
  declarations: [NavigationComponent, NavigationItemDirective],
  providers: [],
})
export class VCLNavigationModule { }
