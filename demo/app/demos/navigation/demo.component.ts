import { Component } from '@angular/core';
import {
  VCLButtonModule,
  VCLIcogramModule,
  VCLNavigationModule,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLButtonModule, VCLNavigationModule, VCLIcogramModule],
})
export class NavigationDemoComponent {
  hoverName?: string;
  hoverLastName?: string;

  onNavigate(route) {
    console.log('Navigate', route);
  }
}
