# Store

## Usage

```js

import { NgModule } from '@angular/core';
import { StoreModule } from 'ng-vcl';
import { AppComponent } from './app.component';
import { REDUCERS } from './reducers';
import { EFFECTS } from './effects';

@NgModule({
  imports: [
    StoreModule.forRoot({
      reducers: [ ... ], //  optional - Your reducers
      effects: [ ... ]   // optional - Effect classes
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```


### Reducers

```js

export const initialState: BooksState = {
  loading: false,
  books: [],
  error: null
};

export class SearchBooksAction {
  constructor(public query: string) {}
}

export class SearchBooksCompleteAction {
  constructor(public books: any[]) {}
}

export class SearchBooksErrorAction {
  constructor(public error: any) {}
}

function bookReducer(state = initialState, action: SearchBooksAction | SearchBooksCompleteAction | SearchBooksErrorAction) {
  if (action instanceof SearchBooksAction) {
    return {
      loading: true,
      books: [],
      error: null
    };
  } else if (action instanceof SearchBooksCompleteAction) {
    return {
      loading: false,
      books: [...action.books],
      error: null
    };
  } else if (action instanceof SearchBooksErrorAction) {
    return {
      loading: false,
      books: [],
      error: action.error
    };
  }
  return state;
}

export const BOOK_REDUCERS = {
  books: bookReducer
}

```

### Store


```js
@Injectable()
export class BooksService {

  constructor(
    private store: Store,
  ) { }

  books$ = this.store.select<BooksState>(state => state.books);

  public search(query: string) {
    this.store.dispatch(new SearchBooksAction(query));
  }
}
```

### Effects

```js
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
```

