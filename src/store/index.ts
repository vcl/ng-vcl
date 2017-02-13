import { NgModule, ModuleWithProviders, Type, Optional, Inject, OpaqueToken, SkipSelf } from '@angular/core';
import { Store, STORE_INITIAL_STATE, STORE_INITIAL_REDUCERS, Reducer, Reducers, StoreState } from './store';
import { reduceReducers, combineReducers } from './utils';
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
    throw new Error(
        `StoreModule.forRoot() called twice. Lazy loaded modules should use StoreModule.forChild() instead.`);
  }
  return 'guarded';
}

export declare interface StoreConfig {
  reducers?: Reducer<any>[] | Reducers[] | Reducer<StoreState> | Reducers;
  effects?: Type<any>[];
  state?: any;
  enableRouter?: boolean;
}
export declare interface StoreChildConfig {
  reducers?: Reducer<any>[] | Reducers[] | Reducer<StoreState> | Reducers;
  effects?: Type<any>[];
}

function createReducer(reducers: any): Reducer<StoreState> {
  let reducer: Reducer<StoreState>;

  if (Array.isArray(reducers)) {
    reducer = reduceReducers(...reducers.map( reducer => {
      if (typeof reducer === 'object' && reducer) {
        return combineReducers(reducer);
      } else if (typeof reducer === 'function') {
        return reducer;
      } else {
        throw 'Invalid reducer in config';
      }
    }));
  } else if (typeof reducers === 'function') {
    reducer = reduceReducers(reducers);
  } else if (typeof reducers === 'object' && reducers) {
    reducer = combineReducers(reducers);
  } else {
    reducer = appState => appState;
  }
  return reducer;
}

export function initialReducer(appState) {
  return appState;
}

@NgModule({
  providers: [
    StoreActions,
    Store,
    Effects,
    {
      provide: STORE_INITIAL_STATE,
      useValue: {}
    },
    {
      provide: STORE_INITIAL_REDUCERS,
      useValue: initialReducer,
      multi: true
    }
  ]
})
export class StoreModule {
  constructor(@Optional() @Inject(STORE_FORROOT_GUARD) guard: any) {}

  static forRoot(config: StoreConfig): ModuleWithProviders {
    let initialReducer = createReducer(config.reducers);

    // Merge router reducer
    if (config.enableRouter) {
      initialReducer = reduceReducers(initialReducer, routerReducer);
    }
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
          useValue: initialReducer
        },
        ...(config.enableRouter ? [
          StoreRouter,
          {
            provide: STORE_EFFECTS,
            useClass: StoreRouterEffects,
            multi: true
          }
        ] : []),
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
  static forChild(config: StoreChildConfig) {
    let initialReducer = createReducer(config.reducers);
    return {
      ngModule: StoreModule,
      providers: [
        {
          provide: STORE_INITIAL_REDUCERS,
          multi: true,
          useValue: initialReducer
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
