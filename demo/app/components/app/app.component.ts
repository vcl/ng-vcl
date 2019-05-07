import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadEnd, RouteConfigLoadStart, RouterEvent } from '@angular/router';
import { routes } from './../../app-routing.module';
import * as Fuse from 'fuse.js';
import { map, distinctUntilChanged, scan } from 'rxjs/operators';

declare var gitBranch: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  busy$ = this.router.events.pipe(
    scan<RouterEvent, number>((cur, event) => {
      if ( event instanceof RouteConfigLoadStart ) {
        return cur + 1;
      } else if ( event instanceof RouteConfigLoadEnd ) {
        return cur - 1;
      }
      return cur;
    }, 0),
    map(cnt => cnt > 0),
    distinctUntilChanged(),
  );

  version = require('./../../../../package.json').version;
  gitBranch = gitBranch || undefined;

  GROUPED_DEMOS = function () {
    const itemsMap = {};
    routes.forEach(r => {
      if (r.data && r.data['demo']) {
        const demo = r.data['demo'];
        if (!itemsMap[demo.category]) { itemsMap[demo.category] = []; }

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
  }();

  searchResults = [];

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  async search(text) {
    this.searchResults = new Fuse<{ [x: string]: any }>(this.GROUPED_DEMOS, {
      keys: ['items.label']
    }).search(text)
      .reduce<any[]>((p: any[], demoGroup: any) => {
        return p.concat(new Fuse<any>(demoGroup.items, { keys: ['label'] }).search(text));
      }, []);
  }
}
