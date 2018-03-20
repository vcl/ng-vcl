import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit } from '@angular/core';
import { debounceTime, switchMap, map, catchError, tap } from 'rxjs/operators';

const BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';



@Component({
  templateUrl: 'demo.component.html'
})
export class AutocompleteDemoComponent {
  constructor(private http: Http) { }

  onChange(change) {
    console.log(change);
  }

  booksSearch$ = new BehaviorSubject<string>('');
  loading = false;
  noResult = false;
  books$ = this.booksSearch$.pipe(
                 debounceTime(200),
                 switchMap(search => {
                 this.noResult = false;
                 if (!search || search.length < 2) {
                   this.loading = false;
                   return  of([]);
                 }
                 this.loading = true;
                 return this.http.get(`${BOOK_API_URL}?q=${search}&projection=lite`).pipe(
                   map(result => result.json()),
                   map(data => {
                     if (!data.items) return [];
                     return data.items.map(item => ({
                       id: item.id,
                       title: item.volumeInfo && item.volumeInfo.title
                     }));
                   }),
                   catchError(ex => {
                     return of([]);
                   }),
                   tap((books) => {
                     this.noResult = books.length === 0;
                     this.loading = false;
                   })
                  );
                })
              );
}


