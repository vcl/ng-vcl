import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent, NavigationLabelComponent } from './navigation-item.component';

export { NavigationComponent, NavigationItemComponent, NavigationLabelComponent };

@NgModule({
  imports: [CommonModule, VCLIcogramModule],
  exports: [NavigationComponent, NavigationItemComponent, NavigationLabelComponent],
  declarations: [NavigationComponent, NavigationItemComponent, NavigationLabelComponent],
  providers: [],
})
export class VCLNavigationModule { }
