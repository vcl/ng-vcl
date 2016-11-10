import { ConnectableObservable } from 'rxjs/observable/ConnectableObservable';
import { OpaqueToken, ModuleWithProviders, Type, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/withLatestFrom';
export declare const STORE_REDUCERS: OpaqueToken;
export declare const STORE_EFFECTS: OpaqueToken;
export declare const STORE_STATE: OpaqueToken;
export interface Action {
    new (...args: any[]): any;
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
export declare class StoreObservable<T> extends Observable<T> {
    constructor(source: any);
    select<U>(path: {
        (value: T): U;
    } | string, ...paths: string[]): StoreObservable<U>;
    lift(operator: any): StoreObservable<T>;
}
export declare class InitAction {
}
export declare class StoreActions extends Observable<any> implements Observer<any> {
    private _dispatcher;
    actions$: Observable<any>;
    source: Observable<any>;
    ofType(...actionClasses: Action[]): Observable<any>;
    dispatch(action: any): void;
    next(action: any): void;
    error(err: any): void;
    complete(): void;
}
export declare class Store extends Observable<any> implements Observer<StoreState> {
    private actions$;
    private initialState;
    constructor(actions$: StoreActions, initialState: any, reducers: Reducers);
    private _reducers;
    reducers$: Observable<Reducers>;
    state$: ConnectableObservable<StoreState>;
    stateSub: Subscription;
    source: ConnectableObservable<StoreState>;
    dispatch(action: any): void;
    addReducers(reducers: Reducers): void;
    select<U>(path: {
        (value: any): U;
    } | string, ...paths: string[]): StoreObservable<U>;
    next(action: any): void;
    error(err: any): void;
    complete(): void;
    ngOnDestroy(): void;
}
export declare class Effects implements OnDestroy {
    private store;
    private effectSubs;
    constructor(store: Store, effects: any[]);
    addEffects(effectInstances: any | any[]): void;
    ngOnDestroy(): void;
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
export declare const compose: ComposeSignature;
export interface StoreConfig {
    reducers?: Reducers;
    effects?: Type<any>[];
    state?: any;
}
export declare class StoreModule {
    static forRoot(config: StoreConfig): ModuleWithProviders;
}
