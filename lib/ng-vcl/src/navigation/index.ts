import { NgModule } from '@angular/core';
import { VCLNavigationComponent } from './navigation.component';
import {
  VCLNavigationItemComponent,
  VCLNavigationLabelComponent,
} from './navigation-item.component';
import { VCLNavigationHeadingComponent } from './navigation-headnig.component';

export {
  VCLNavigationComponent,
  VCLNavigationItemComponent,
  VCLNavigationLabelComponent,
  VCLNavigationHeadingComponent,
};

@NgModule({
  imports: [
    VCLNavigationComponent,
    VCLNavigationItemComponent,
    VCLNavigationLabelComponent,
    VCLNavigationHeadingComponent,
  ],
  exports: [
    VCLNavigationComponent,
    VCLNavigationItemComponent,
    VCLNavigationLabelComponent,
    VCLNavigationHeadingComponent,
  ],
})
export class VCLNavigationModule {}
