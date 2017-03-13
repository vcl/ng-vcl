import { SimpleChange, OnDestroy, OnChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

export abstract class ObservableComponent implements OnDestroy, OnChanges  {
    private changesSubject = new Subject<{ [key: string]: SimpleChange }>();
    private observedProps: {[key: string]: Observable<any>} = {};
    protected changes$: Observable<{ [key: string]: SimpleChange }> = this.changesSubject.asObservable();

    ngOnChanges(changes: { [key: string]: SimpleChange }) {
      this.changesSubject.next(changes);
    }

    ngOnDestroy() {
      this.changesSubject.complete();
    }

    protected observeChange<T>(prop: string): Observable<T> {
      if (!this.observedProps[prop]) {
        let c$ = this.changes$
                     .filter(changes => changes.hasOwnProperty(prop))
                     .map(changes => changes[prop].currentValue)
                     .publishReplay(1);
        c$.connect();
        this.observedProps[prop] = c$;
      }
      return this.observedProps[prop];
    }
}
