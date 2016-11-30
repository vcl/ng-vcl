import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/distinctUntilChanged';
import { Injectable, OpaqueToken, Inject } from '@angular/core';

import { StoreActions, InitAction } from './actions';
import { StoreObservable, select } from './observable';
import { combineReducers } from './utils';

export const STORE_INITIAL_REDUCER = new OpaqueToken('store.reducers');
export const STORE_INITIAL_STATE = new OpaqueToken('store.state');

export interface StoreState {
  [key: string]: any;
}

export interface Reducer<TState> {
  (state: TState, action: any): TState;
}
export interface Reducers {
  [key: string]: Reducer<any>;
}


@Injectable()
export class Store extends Observable<any> implements Observer<StoreState> {

  constructor(
    private actions$: StoreActions,
    @Inject(STORE_INITIAL_STATE)
    private initialState: any,
    @Inject(STORE_INITIAL_REDUCER)
    private initialReducer: Reducer<StoreState>,
  ) {
    super();
    // Listen to actions by connecting the state observable
    this.stateSub = this.state$.connect();
    // Init action
    this.dispatch(new InitAction());
  }

  // The reducer stream
  private _reducer = new BehaviorSubject<Reducer<StoreState>>(this.initialReducer);
  private get reducer$(): Observable<Reducer<StoreState>>  {
    return this._reducer.asObservable();
  };

  // The state changes when an action is dispatched by running reducers
  // The new state is then cached for further subscribers
  state$ = this.actions$.withLatestFrom(this.reducer$).scan<any, StoreState>((currentState, [action, reducer]) => {
    return reducer(currentState, action);
  }, this.initialState).distinctUntilChanged().publishReplay(1);

  stateSub: Subscription;

  // The source of the store observable is also the state stream
  source: ConnectableObservable<StoreState> = this.state$;

  replaceReducer(reducer: Reducer<StoreState> | Reducers) {
    if (typeof reducer === 'object') {
      this._reducer.next(combineReducers(reducer));
    } else {
      this._reducer.next(reducer);
    }
  }

  dispatch(action: any) {
    if (action) {
      this.actions$.dispatch(action);
    }
  }

  select<U>(path: { (value: any): U } | string, ...paths: string[]): StoreObservable<U> {
    return select.call(this, path, ...paths);
  }

  next(action: any) {
    this.dispatch(action);
  }

  error(err: any) { }

  complete() { }

  ngOnDestroy() {
    if (this.stateSub && !this.stateSub.closed) this.stateSub.unsubscribe();
  }
}

