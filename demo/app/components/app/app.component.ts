import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './../../app-routing.module';
import * as Fuse from 'fuse.js';

declare var gitBranch: string;

@Component({
  selector: 'vcl-demo',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
   }

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
    this.router.events.subscribe((path) => {
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
