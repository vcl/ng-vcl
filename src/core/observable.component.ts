import { SimpleChange } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export abstract class ObservableComponent {
    private changesSubject = new Subject<{ [key: string]: SimpleChange }>();
    protected changes$: Observable<{ [key: string]: SimpleChange }> = this.changesSubject.asObservable();

    ngOnChanges(changes: { [key: string]: SimpleChange }) {
      this.changesSubject.next(changes);
    }

    public observeChange<T>(...props: string[]): Observable<T> {
      return this.changes$
                  .filter(changes => props.some(p => changes.hasOwnProperty(p)))
                  .map(changes => props.length === 1
                    ? changes[props[0]].currentValue
                    : props.map(p => changes.hasOwnProperty(p) ? changes[p].currentValue : null));
    }
}
