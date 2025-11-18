import { NgModule } from '@angular/core';
import { VCLNavigationComponent } from './navigation.component';
import {
  VCLNavigationItemComponent,
  VCLNavigationLabelComponent,
} from './navigation-item.component';

export {
  VCLNavigationComponent,
  VCLNavigationItemComponent,
  VCLNavigationLabelComponent,
};

@NgModule({
  imports: [
    VCLNavigationComponent,
    VCLNavigationItemComponent,
    VCLNavigationLabelComponent,
  ],
  exports: [
    VCLNavigationComponent,
    VCLNavigationItemComponent,
    VCLNavigationLabelComponent,
  ],
})
export class VCLNavigationModule {}
