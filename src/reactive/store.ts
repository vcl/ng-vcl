import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { Injectable, NgModule, OpaqueToken, Inject, ModuleWithProviders, Type, Optional, OnDestroy } from '@angular/core';
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
export const STORE_STATE = new OpaqueToken('store.state');

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


function select<T, U>(this: Observable<U>, path: { (value: U): T } | string, ...paths: string[]): StoreObservable<T> {
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
    setTimeout(() => this._dispatcher.next(action), 0);
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
    @Inject(STORE_STATE)
    private initialState: any,
    @Inject(STORE_REDUCERS)
    reducers: Reducers,
  ) {
    super();
    this.addReducers(reducers);
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
  state$ = this.actions$.withLatestFrom(this.reducers$).scan<any, StoreState>((currentState, [action, reducers]) => {
    let state = Object.assign({}, currentState);
    Object.keys(reducers).forEach(key => {
      const reducer = reducers[key];
      state[key] = reducer(currentState[key], action);
    });
    return state;
  }, this.initialState).publishReplay(1);

  stateSub: Subscription;

  // The source of the store observable is also the state stream
  source: ConnectableObservable<StoreState> = this.state$;

  dispatch(action: any) {
    if (action) {
      this.actions$.dispatch(action);
    }
  }

  addReducers(reducers: Reducers) {
    this._reducers.next(reducers);
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

@Injectable()
export class Effects implements OnDestroy {

  private effectSubs: Subscription[] = [];

  constructor(
    private store: Store,
    @Optional()
    @Inject(STORE_EFFECTS)
    effects: any[]
  ) {
    this.addEffects(effects);
  }

  addEffects(effectInstances: any | any[]) {
    const eiArr: any[] = Array.isArray(effectInstances) ? effectInstances : [effectInstances];
    eiArr.forEach(instance => {
      if (instance) {
        const properties = getEffectsMetadata(instance);
        const effects$ = merge(...(properties.map(property => instance[property])));
        const sub = effects$.subscribe(this.store);
        this.effectSubs.push(sub);
      }
    });
  }

  ngOnDestroy() {
    [...this.effectSubs].filter(sub => sub && !sub.closed).forEach(sub => sub.unsubscribe());
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

export declare interface StoreConfig {
  reducers?: Reducers;
  effects?: Type<any>[];
  state?: any;
}

@NgModule({
  providers: [
    StoreActions,
    Store,
    Effects,
    {
      provide: STORE_STATE,
      useValue: {}
    },
    {
      provide: STORE_REDUCERS,
      useValue: {}
    }
  ]
})
export class StoreModule {
  static forRoot(config: StoreConfig): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [
        StoreActions,
        Store,
        Effects,
        {
          provide: STORE_STATE,
          useValue: config.state || {}
        },
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

