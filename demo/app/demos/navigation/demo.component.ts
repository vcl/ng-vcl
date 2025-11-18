import { Component } from '@angular/core';
import {
  VCLNavigationComponent,
  VCLNavigationItemComponent,
  VCLNavigationLabelComponent,
  VCLIcogramComponent,
  VCLIconComponent
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [
    VCLNavigationComponent,
    VCLNavigationItemComponent,
    VCLNavigationLabelComponent,
    VCLIcogramComponent,
    VCLIconComponent
  ],
})
export class NavigationDemoComponent {
  hoverName?: string;
  hoverLastName?: string;

  onNavigate(route) {
    console.log('Navigate', route);
  }
}
