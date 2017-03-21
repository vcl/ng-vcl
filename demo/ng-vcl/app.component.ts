import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GROUPED_DEMOS } from "./demos";

// TODO: temp fix for fuse.js import until fix is integrated
// https://github.com/krisk/Fuse/pull/129
interface FuseStub {
  new(...args): FuseStub;
  search(...args): FuseStub;
  reduce<T>(...args);
}
const Fuse = require('fuse.js') as FuseStub;

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private router: Router,
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
      .reduce<any[]>((p: any[], demoGroup: any) => {
        return p.concat(new Fuse(demoGroup.items, { keys: ['label'] }).search(text));
      }, []);
  }

  get groupedDemos() {
    return this.searchResults.length
      ? this.searchResults
      : GROUPED_DEMOS;
  }
}
