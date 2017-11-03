import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/publish';
import { Inject, Injectable, InjectionToken } from '@angular/core';

import { Action, StoreActions } from './actions';
import { select, StoreObservable } from './observable';
import { combineReducers, reduceReducers } from './utils';
import { Subject } from "rxjs/Subject";

export const STORE_INITIAL_REDUCERS = new InjectionToken('store.initial.reducers');
export const STORE_INITIAL_STATE = new InjectionToken('store.initial.state');

export interface StoreState {
  [key: string]: any;
}

export interface Reducer<TState> {
  (state: TState, action: any): TState;
}
export interface Reducers {
  [key: string]: Reducer<any>;
}

// Some store actions
export class StoreInitAction { }
export class StoreErrorAction {
  constructor(public err: any) { }
}
export class ReducerInitAction { }

@Injectable()
export class Store extends Observable<any> implements Observer<StoreState> {

  // The reducer stream
  private _reducer: Subject<Reducer<any>> = new Subject();
  private state$: ConnectableObservable<StoreState>;
  private stateSub: Subscription;

  constructor(
    public actions$: StoreActions,
    @Inject(STORE_INITIAL_STATE)
    initialState: any
  ) {
    super();

    const reducer$ = this._reducer.asObservable().scan((accReducer, reducer) => {
      return reduceReducers(accReducer, reducer);
    }, appState => appState);

    // The state changes when an action is dispatched by running reducers
    // The new state is then cached for further subscribers
    this.state$ = this.actions$.withLatestFrom(reducer$).scan<any, StoreState>((currentState, [action, reducer]) => {
      return reducer(currentState, action);
    }, initialState).distinctUntilChanged().publishReplay(1);

    // Listen to actions by connecting the state observable
    this.stateSub = this.state$.connect();

    // Init action
    this.dispatch(new StoreInitAction());
  }

  // The source of the store observable is also the state stream
  get source(): ConnectableObservable<StoreState> { return this.state$; }

  addReducer(reducer: Reducer<StoreState> | Reducers) {
    const r = typeof reducer === 'object' ? combineReducers(reducer) : reducer;
    this._reducer.next(r);
  }

  dispatch(action: any, immediate = false) {
    if (action) {
      this.actions$.dispatch(action, immediate);
    }
  }

  select<U>(path: { (value: any): U } | string, ...paths: string[]): StoreObservable<U> {
    return select.call(this, path, ...paths);
  }

  actionOfType(...actionClasses: Action[]): Observable<any> {
    return this.actions$.ofType(...actionClasses);
  }

  next(action: any) {
    this.dispatch(action);
  }

  error(err: any) {
    // Errors result in a StoreErrorAction
    this.dispatch(new StoreErrorAction(err));
  }

  complete() { /* store never completes */ }

  ngOnDestroy() {
    this.stateSub && this.stateSub.unsubscribe();
  }
}

