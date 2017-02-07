import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store, StoreActions, Effect } from '@ng-vcl/ng-vcl';

import { BooksState, SearchBooksAction, SearchBooksCompleteAction, SearchBooksErrorAction } from './books.reducers';

const API = 'https://www.googleapis.com/books/v1/volumes';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: StoreActions,
    private http: Http
  ) { }

  @Effect()
  search = this.actions$
               .ofType(SearchBooksAction)
               .switchMap( ({query}) => {
                return this.http.get(`${API}?q=${query || ''}`)
                            .map(res => res.json())
                            .map(result => result.items)
                            .map(items => {
                              return new SearchBooksCompleteAction(items);
                            })
                            .catch(err => {
                              return Observable.of(new SearchBooksErrorAction(err));
                            });
              });
}

@Injectable()
export class BooksService {

  constructor(
    private store: Store,
  ) { }

  search$ = this.store.select<BooksState>(state => state.books);

  public search(query: string) {
    this.store.dispatch(new SearchBooksAction(query));
  }
}

