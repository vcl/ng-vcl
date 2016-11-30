import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';

export function select<T, U>(this: Observable<U>, path: { (value: U): T } | string, ...paths: string[]): StoreObservable<T> {
  let select$: Observable<T>;
  if (typeof path === 'string') {
    select$ = this.pluck(path, ...paths);
  }
  else if (typeof path === 'function') {
    select$ = this.map(path);
  }
  else {
    throw new TypeError(`Unexpected type ${ typeof path } in select operator`);
  }
  select$ = select$.distinctUntilChanged();

  return new StoreObservable<T>(select$);
}

export class StoreObservable<T> extends Observable<T> {

  constructor(source) {
    super();
    this.source = source;
  }

  select<U>(path: { (value: T): U } | string, ...paths: string[]): StoreObservable<U> {
    return select.call(this, path, ...paths);
  }

  lift(operator) {
    const observable = new StoreObservable<T>(this);
    observable.operator = operator;
    return observable;
  }
};
