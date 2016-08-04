import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import template from './app.component.html';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template 
}) 
export class AppComponent {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }
}
  