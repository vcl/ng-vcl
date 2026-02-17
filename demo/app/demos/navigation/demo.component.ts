import { Component } from '@angular/core';
import {
  VCLNavigationComponent,
  VCLNavigationItemComponent,
  VCLNavigationLabelComponent,
  VCLIcogramComponent,
  VCLIconComponent,
  VCLNavigationHeadingComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [
    VCLNavigationComponent,
    VCLNavigationHeadingComponent,
    VCLNavigationItemComponent,
    VCLNavigationLabelComponent,
    VCLIcogramComponent,
    VCLIconComponent,
  ],
})
export class NavigationDemoComponent {
  hoverName?: string;
  hoverLastName?: string;

  onNavigate(route) {
    console.log('Navigate', route);
  }
}
