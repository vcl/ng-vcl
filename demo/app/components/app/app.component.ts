import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Router,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
} from '@angular/router';
import Fuse from 'fuse.js';
import { Subscription } from 'rxjs';
import { map, distinctUntilChanged, scan } from 'rxjs/operators';

import { DrawerComponent } from '@vcl/ng-vcl';

import { routes } from './../../app-routing.module';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare var gitBranch: string;

@Component({
  selector: 'vcl-app-demo',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('drawer', {
    static: true,
    read: DrawerComponent,
  })
  drawer: DrawerComponent;

  xsmall = true;
  left = true;

  busy$ = this.router.events.pipe(
    scan((cur, event) => {
      if (event instanceof RouteConfigLoadStart) {
        return cur + 1;
      } else if (event instanceof RouteConfigLoadEnd) {
        return cur - 1;
      }
      return cur;
    }, 0),
    map(cnt => cnt > 0),
    distinctUntilChanged()
  );

  version = require('./../../../../package.json').version;
  gitBranch = window['gitBranch'] ?? undefined;

  GROUPED_DEMOS = (() => {
    const itemsMap = {};
    routes.forEach(r => {
      if (r.data && r.data.demo) {
        const demo = r.data.demo;
        if (!itemsMap[demo.category]) {
          itemsMap[demo.category] = [];
        }

        itemsMap[demo.category].push({
          label: demo.label,
          route: ['/' + r.path],
        });
      }
    });

    return Object.keys(itemsMap).map(category => ({
      label: category,
      items: itemsMap[category],
    }));
  })();

  searchResults = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private readonly router: Router,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.router.events.subscribe(() => {
        window.scrollTo(0, 0);
      })
    );

    this.subscriptions.push(
      this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(state => {
        this.xsmall = state.breakpoints[Breakpoints.XSmall];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }

  onNavItemClick(): void {
    if (this.xsmall) {
      this.drawer.close();
    }
  }

  async search(text: string): Promise<void> {
    this.searchResults = new Fuse(this.GROUPED_DEMOS, {
      keys: ['items.label'],
    })
      .search(text)
      .reduce<any[]>((p: any[], demoGroup: any) => {
        const subSearch = new Fuse(demoGroup.item.items, {
          keys: ['label'],
        }).search(text);
        return p.concat(subSearch.map(searchedItem => searchedItem.item));
      }, []);
  }
}
