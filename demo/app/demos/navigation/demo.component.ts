import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class NavigationDemoComponent {
  onNavigate(route) {
    console.log('Navigate', route);
  }
}
