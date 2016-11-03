import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEMOS, GROUPED_DEMOS } from "./demos";

// TODO: update typedef for fuse.js
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/fuse
import * as Fuse from 'fuse.js';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((path) => {
      window.scrollTo(0, 0);
    });
  }

  searchResults = [];

  search(text) {
    this.searchResults = new Fuse(GROUPED_DEMOS, { keys: ['items.label'] })
      .search(text)
      .reduce((p, demoGroup) => {
        return p.concat(new Fuse(demoGroup.items, { keys: ['label'] }).search(text));
      }, []);
  }

  get demos() {
    return DEMOS;
  }

  get groupedDemos() {
    return this.searchResults.length
      ? this.searchResults
      : GROUPED_DEMOS;
  }
}
