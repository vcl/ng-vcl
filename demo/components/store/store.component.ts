import { Component } from '@angular/core';
import { Store } from './../../../src/index';

import { BooksService } from './books.service';

@Component({
  templateUrl: 'store.component.html'
})
export class StoreComponent  {
  constructor(private books: BooksService, private store: Store) { }

  loading$ = this.books.search$.select(search => search.loading);
  books$ = this.books.search$.select(search => search.books).map(books => books.map(book => book.volumeInfo.title));
  error$ = this.books.search$.select(search => search.error);

  query: string;

  search() {
    this.books.search(this.query);
  }
}
