import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Injectable, NgModule, OpaqueToken, Inject, ModuleWithProviders, Type, Optional } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/withLatestFrom';
import { getEffectsMetadata } from '../reflect';

export const STORE_REDUCERS = new OpaqueToken('store.reducers');
export const STORE_EFFECTS = new OpaqueToken('store.effects');

export interface Action {
  new(...args: any[]);
}

export interface StoreState {
  [key: string]: any;
}

export interface Reducer<TState> {
  (state: TState, action: any): TState;
}
export interface Reducers {
  [key: string]: Reducer<any>;
}

declare module 'rxjs/Observable' {
  interface Observable<T> {
    select: { <T>(pathOrMapFn: { (value: any): any } | string, ...paths: string[]): Observable<T> };
  }
}

function select<T>(this: Observable<T>, pathOrMapFn: { (value: any): any } | string, ...paths: string[]): Observable<T> {
  let mapped$: Observable<T>;
  if (typeof pathOrMapFn === 'string') {
    mapped$ = this.pluck(pathOrMapFn, ...paths);
  }
  else if (typeof pathOrMapFn === 'function') {
    mapped$ = this.map(pathOrMapFn);
  }
  else {
    throw new TypeError(`Unexpected type ${ typeof pathOrMapFn } in select operator,`
      + ` expected 'string' or 'function'`);
  }
  return mapped$.distinctUntilChanged();
}

// tslint:disable-next-line:only-arrow-functions
Observable.prototype.select = select;

export class InitAction {}

@Injectable()
export class StoreActions extends Observable<any> implements Observer<any> {
  // Action dispatcher
  private _dispatcher = new Subject<any>();
  // Action stream ist just the last action
  public actions$ = this._dispatcher.asObservable();

  source = this.actions$;

  ofType(...actionClasses: Action[]): Observable<any> {
    return this.actions$.filter((action) => actionClasses.some(cls => action instanceof cls));
  }

  dispatch(action: any) {
    this._dispatcher.next(action);
  }

  next(action: any) {
    this.dispatch(action);
  }

  error(err: any) { }

  complete() { }
}

@Injectable()
export class Store extends Observable<any> implements Observer<StoreState> {

  constructor(
    private actions$: StoreActions,
    @Inject(STORE_REDUCERS) reducers: Reducers,
    @Optional()
    @Inject(STORE_EFFECTS)
    effects: any[]
  ) {
    super();
    this.addReducers(reducers);
    if (effects) {
      this.addEffects(effects);
    }

    // Listen to actions by connecting the state observable
    this.stateSub = this.state$.connect();
    // Init action
    this.dispatch(new InitAction());
  }

  // Reducers dispatcher
  private _reducers = new BehaviorSubject<Reducers>({});

  // Reducers stream
  reducers$ = this._reducers.asObservable().scan((reducers, currentReducers) => {
    return Object.assign({}, reducers, currentReducers);
  }, {});

  // The state changes when an action is dispatched by running reducers
  // The new state is then cached for further subscribers 
  state$ = this.actions$.withLatestFrom(this.reducers$).scan<any, StoreState>((oldState, [action, reducers]) => {
    let state = Object.assign({}, oldState);
    Object.keys(reducers).forEach(key => {
      let reducer = reducers[key];
      state[key] = reducer(oldState[key], action) || {};
    });
    return state;
  }, {}).publishReplay(1);

  stateSub: Subscription;

  // The source of the store observable is also the state stream
  source: ConnectableObservable<StoreState> = this.state$;

  private effectSubs: Subscription[] = [];


  dispatch(action: any) {
    this.actions$.dispatch(action);
  }

  addReducers(reducers: Reducers) {
    this._reducers.next(reducers);
  }

  addEffects(effectInstances: any | any[]) {
    const eiArr: any[] = Array.isArray(effectInstances) ? effectInstances : [effectInstances];
    eiArr.forEach(instance => {
      const properties = getEffectsMetadata(instance);
      const effects$ = merge(...(properties.map(property => instance[property])));
      const sub = effects$.subscribe(action => {
        if (action) {
          this.dispatch(action);
        }
      });
      this.effectSubs.push(sub);
    });
  }

  next(action: any) {
    this.dispatch(action);
  }

  error(err: any) { }

  complete() { }

  ngOnDestroy() {
    [this.stateSub, ...this.effectSubs].filter(sub => sub && !sub.closed).forEach(sub => sub.unsubscribe());
  }
}

export interface ComposeSignature {
  <A>(): (i: A) => A;
  <A, B>(b: (i: A) => B): (i: A) => B;
  <A, B, C>(c: (i: B) => C, b: (i: A) => B): (i: A) => C;
  <A, B, C, D>(d: (i: C) => D, c: (i: B) => C, b: (i: A) => B): (i: A) => D;
  <A, B, C, D, E>(e: (i: D) => E, d: (i: C) => D, c: (i: B) => C, b: (i: A) => B): (i: A) => E;
  <A, B, C, D, E, F>(f: (i: E) => F, e: (i: D) => E, d: (i: C) => D, c: (i: B) => C, b: (i: A) => B): (i: A) => F;
  (...fns: any[]): (input: any) => any;
}

export const compose: ComposeSignature = (...functions) => {
  return (arg) => {
    if (functions.length === 0) {
      return arg;
    }
    const last = functions[functions.length - 1];
    const rest = functions.slice(0, -1);
    return rest.reduceRight((composed, fn) => fn(composed), last(arg));
  };
};


export interface SelectSignature<T> {
  <R>(...paths: string[]): Observable<R>;
  <R>(mapFn: (state: T) => R): Observable<R>;
}

export declare interface StoreConfig {
  reducers?: Reducers;
  effects?: Type<any>[];
}

@NgModule({
  providers: [
    Store,
    {
      provide: STORE_REDUCERS,
      useValue: {}
    },
  ]
})
export class StoreModule {
  static forRoot(config: StoreConfig): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [
        StoreActions,
        Store,
        {
          provide: STORE_REDUCERS,
          useValue: config.reducers || {}
        },
        ...(config.effects || []).map(type => {
          return {
            provide: STORE_EFFECTS,
            useClass: type,
            multi: true
          };
        })
      ]
    };
  }
}

