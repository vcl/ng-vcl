import { SimpleChange } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export abstract class ObservableComponent {
    private changesSubject = new ReplaySubject<{ [key: string]: SimpleChange }>();
    protected changes$: Observable<{ [key: string]: SimpleChange }> = this.changesSubject.asObservable();

    ngOnChanges(changes: { [key: string]: SimpleChange }) {
      this.changesSubject.next(changes);
    }

    public observeChange<T>(propertyName: string): Observable<T> {
      return this.changes$
                  .filter(changes => changes.hasOwnProperty(propertyName))
                  .map(changes => changes[propertyName].currentValue);
    }
}
