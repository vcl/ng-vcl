import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import {
  NavigationItemComponent,
  NavigationLabelComponent,
} from './navigation-item.component';

export {
  NavigationComponent,
  NavigationItemComponent,
  NavigationLabelComponent,
};

@NgModule({
  imports: [
    NavigationComponent,
    NavigationItemComponent,
    NavigationLabelComponent,
  ],
  exports: [
    NavigationComponent,
    NavigationItemComponent,
    NavigationLabelComponent,
  ],
})
export class VCLNavigationModule {}
