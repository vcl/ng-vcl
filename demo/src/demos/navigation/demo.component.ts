import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class NavigationDemoComponent {

  hoverName?: string;

  onNavigate(route) {
    console.log('Navigate', route);
  }
}
