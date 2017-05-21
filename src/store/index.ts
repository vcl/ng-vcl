import { NgModule, ModuleWithProviders, Type, Optional, Inject, OpaqueToken, SkipSelf } from '@angular/core';
import { Store, STORE_INITIAL_STATE, STORE_INITIAL_REDUCERS, Reducer, Reducers, StoreState, ReducerInitAction } from './store';
import { reduceReducers, combineReducers, createReducer } from './utils';
import { StoreActions } from './actions';
import { Effects, STORE_EFFECTS } from './effects';
import { routerReducer, StoreRouter, StoreRouterEffects } from './router';

export * from './actions';
export * from './utils';
export * from './effects';
export * from './observable';
export * from './store';
export * from './router';

export const STORE_FORROOT_GUARD = new OpaqueToken('STORE_FORROOT_GUARD');

export function provideForRootGuard(store: Store): any {
  if (store) {
    throw new Error(`StoreModule.forRoot() called twice. Lazy loaded modules should use StoreModule.forChild() instead.`);
  }
  return 'guarded';
}

export declare interface StoreConfig {
  reducers?: Reducer<any>[] | Reducers[] | Reducer<StoreState> | Reducers;
  effects?: any[];
  state?: any;
  enableRouter?: boolean;
}
export declare interface StoreChildConfig {
  reducers?: Reducer<any>[] | Reducers[] | Reducer<StoreState> | Reducers;
  effects?: Type<any>[];
}

@NgModule()
export class StoreModule {

  static forRoot(config: StoreConfig = {}): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [
        {
          provide: STORE_FORROOT_GUARD,
          useFactory: provideForRootGuard,
          deps: [[Store, new Optional(), new SkipSelf()]]
        },
        StoreActions,
        Store,
        StoreRouter,
        Effects,
        {
          provide: STORE_INITIAL_STATE,
          useValue: config.state || {}
        },
        {
          provide: STORE_INITIAL_REDUCERS,
          multi: true,
          useValue: config.reducers
        },
        ...(config.enableRouter ? [
          StoreRouter,
          {
            provide: STORE_EFFECTS,
            useClass: StoreRouterEffects,
            multi: true
          },
          {
            provide: STORE_INITIAL_REDUCERS,
            multi: true,
            useValue: routerReducer
          }
        ] : []),
        ...(config.effects || []),
        {
          provide: STORE_EFFECTS,
          useValue: config.effects,
          multi: true
        }
      ]
    };
  }
  static forChild(config: StoreChildConfig = {}) {
    return {
      ngModule: StoreModule,
      providers: [
        Effects,
        {
          provide: STORE_INITIAL_REDUCERS,
          multi: true,
          useValue: config.reducers
        },
        ...(config.effects || []),
        {
          provide: STORE_EFFECTS,
          useValue: config.effects,
          multi: true
        }
      ]
    };
  }

  constructor(
    @Optional() @Inject(STORE_FORROOT_GUARD) guard: any,
    store: Store,
    @Inject(STORE_INITIAL_REDUCERS) initialReducers: Reducer<StoreState>[],
    effects: Effects) {
    const reducers = initialReducers.map(reducer => createReducer(reducer));
    const reducer = reduceReducers(...reducers);
    store.addReducer(reducer);

    // The init action should run immediate so combined reducers can prepare the state
    store.dispatch(new ReducerInitAction(), true);
  }
}
