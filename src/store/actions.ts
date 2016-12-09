import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { Injectable } from '@angular/core';

export interface Action {
  new(...args: any[]);
}

@Injectable()
export class StoreActions extends Observable<any> implements Observer<any> {
  // Action dispatcher
  private _dispatcher = new Subject<any>();
  // Action stream ist just the last action
  public actions$ = this._dispatcher.asObservable();

  source = this.actions$;

  constructor() {
    super();
  }

  ofType(...actionClasses: Action[]): Observable<any> {
    return this.actions$.filter((action) => actionClasses.some(cls => action instanceof cls));
  }

  dispatch(action: any) {
    setTimeout(() => this._dispatcher.next(action), 0);
  }

  next(action: any) {
    this.dispatch(action);
  }

  error(err: any) { }

  complete() { }
}
