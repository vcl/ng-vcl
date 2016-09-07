import {Component} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DEMO_COMPONENTS } from "./demo-components";

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  title: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events
      .filter(event => (event instanceof NavigationEnd))
      .map(_ => this.router.routerState)
      .flatMap(state => state.root.firstChild.data)
      .subscribe( (data: any) => {
        if(data && data.name ) {
          this.title = data.name;
        }
      });

      this.router.events.subscribe((path) => {
        window.scrollTo(0, 0);
      });
  }

  get demoComponents() {
    return DEMO_COMPONENTS;
  }
}
