import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent, NavigationLabelDirective } from './navigation-item.component';

export { NavigationComponent, NavigationItemComponent, NavigationLabelDirective };

@NgModule({
  imports: [CommonModule, VCLIcogramModule],
  exports: [NavigationComponent, NavigationItemComponent, NavigationLabelDirective],
  declarations: [NavigationComponent, NavigationItemComponent, NavigationLabelDirective],
  providers: [],
})
export class VCLNavigationModule { }
