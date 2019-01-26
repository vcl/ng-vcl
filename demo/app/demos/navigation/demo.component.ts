import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class NavigationDemoComponent {

  hoverName?: string;
  hoverLastName?: string;

  onNavigate(route) {
    console.log('Navigate', route);
  }
}
