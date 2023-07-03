import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLIcogramModule } from '../icogram/index';

import {
  NavigationItemComponent,
  NavigationLabelComponent,
} from './navigation-item.component';
import { NavigationComponent } from './navigation.component';

export {
  NavigationComponent,
  NavigationItemComponent,
  NavigationLabelComponent,
};

@NgModule({
  imports: [CommonModule, VCLIcogramModule],
  exports: [
    NavigationComponent,
    NavigationItemComponent,
    NavigationLabelComponent,
  ],
  declarations: [
    NavigationComponent,
    NavigationItemComponent,
    NavigationLabelComponent,
  ],
  providers: [],
})
export class VCLNavigationModule {}
