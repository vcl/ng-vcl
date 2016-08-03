import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app.component.html'
}) 
export class AppComponent {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }
}
 