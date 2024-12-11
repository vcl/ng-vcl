import { Component } from '@angular/core';

@Component({
    templateUrl: 'demo.component.html',
    standalone: false
})
export class NavigationDemoComponent {
  hoverName?: string;
  hoverLastName?: string;

  onNavigate(route) {
    console.log('Navigate', route);
  }
}
