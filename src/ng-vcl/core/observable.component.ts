import { SimpleChanges, SimpleChange, OnDestroy, OnChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

export abstract class ObservableComponent implements OnDestroy, OnChanges  {
  private changesSubject = new Subject<SimpleChanges>();
  private observedProps: {[key: string]: Observable<SimpleChange>} = {};
  protected changes$: Observable<SimpleChanges> = this.changesSubject.asObservable();

  ngOnChanges(changes: SimpleChanges) {
    this.changesSubject.next(changes);
  }

  ngOnDestroy() {
    this.changesSubject.complete();
  }

  protected observeChanges(...props: string[]): Observable<SimpleChanges> {
    return this.changes$.filter(changes => props.some(p => changes.hasOwnProperty(p)));
  }

  protected observeChange(prop: string): Observable<SimpleChange> {
    if (!this.observedProps[prop]) {
      let c$ = this.changes$
                    .filter(changes => changes.hasOwnProperty(prop))
                    .map(changes => changes[prop])
                    .publishReplay(1);
      c$.connect();
      this.observedProps[prop] = c$;
    }
    return this.observedProps[prop];
  }

  protected observeChangeValue<T>(prop: string): Observable<T> {
    return this.observeChange(prop).map(change => <T> change.currentValue);
  }

}
