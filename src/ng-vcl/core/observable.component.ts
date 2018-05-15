import { SimpleChanges, SimpleChange, OnDestroy, OnChanges } from '@angular/core';
import { Subject, Observable, ConnectableObservable } from 'rxjs';
import { filter, map, publishReplay } from 'rxjs/operators';

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
    return this.changes$.pipe(filter(changes => props.some(p => changes.hasOwnProperty(p))));
  }

  protected observeChange(prop: string): Observable<SimpleChange> {
    if (!this.observedProps[prop]) {
      let c$ = this.changes$.pipe(
                    filter(changes => changes.hasOwnProperty(prop)),
                    map(changes => changes[prop]),
                    publishReplay(1)
      ) as ConnectableObservable<SimpleChange>;
      c$.connect();
      this.observedProps[prop] = c$;
    }
    return this.observedProps[prop];
  }

  protected observeChangeValue<T = any>(prop: string): Observable<T> {
    return this.observeChange(prop).pipe(map(change => <T> change.currentValue));
  }
}
