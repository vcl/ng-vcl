import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject ,  of } from 'rxjs';
import { debounceTime, switchMap, map, catchError, startWith } from 'rxjs/operators';

const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';

@Component({
  templateUrl: 'demo.component.html'
})
export class AutocompleteDemoComponent {
  constructor(private http: HttpClient) { }

  booksInput$ = new BehaviorSubject<string>('');

  ac$ = this.booksInput$.pipe(
                 debounceTime(200),
                 switchMap(search => {
                  if (!search || search.length < 2) {
                    // Show nothing if less than 2 characters
                    return of({ state: 'void', books: [] });
                  } else {
                    return this.http.get(`${BOOK_API_URL}?q=${search}&projection=lite`).pipe(
                      map((data: any) => {
                        const items = data.items || [];
                        return {
                          state: 'success',
                          books: items.filter(item => item.id && item.volumeInfo && item.volumeInfo.title)
                                      .map(item => ({
                            id: item.id,
                            title: item.volumeInfo.title
                          }))
                        };
                      }),
                      catchError(ex => of({ state: 'error', books: [] })), // Error state
                      startWith({ state: 'loading', books: [] }) // Set state to loading before the request
                    );
                  }
                }),
                startWith({ state: 'void', books: [] }) // Initial state
  );

  onChange(change) {
    console.log(change);
  }
}


