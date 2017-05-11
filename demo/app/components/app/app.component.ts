import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from "./../../app.routes";

const GROUPED_DEMOS = function () {
    const itemsMap = {};
    routes.forEach(r => {
      if (r.data && r.data['demo']) {
        const demo = r.data['demo'];
        if (!itemsMap[demo.category]) itemsMap[demo.category] = [];

        itemsMap[demo.category].push({
          label: demo.label,
          route: ['/' + r.path]
        });
      }
    });

    return Object.keys(itemsMap).map(category => ({
      label: category,
      items: itemsMap[category]
    }));
} ();

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
