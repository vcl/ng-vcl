import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, StoreErrorAction } from '../src/index';
import { GROUPED_DEMOS } from "./demos";

// TODO: update typedef for fuse.js
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/fuse
import { Fuse }  from 'fuse.js';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((path) => {
      window.scrollTo(0, 0);
    });
    this.store.subscribe(state => {
      console.log('store: app state changed:', state);
    });
    this.store.actionOfType(StoreErrorAction).subscribe(errAction => {
      console.log('store: error', errAction.err);
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
