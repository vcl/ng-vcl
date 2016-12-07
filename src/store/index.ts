import { reduceReducers, combineReducers } from './utils';
import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { Store, STORE_INITIAL_STATE, STORE_INITIAL_REDUCERS, Reducer, Reducers, StoreState } from './store';
import { StoreActions } from './actions';
import { Effects, STORE_EFFECTS } from './effects';
import { routerReducer, StoreRouter, StoreRouterEffects } from './router';

export * from './actions';
export * from './utils';
export * from './effects';
export * from './observable';
export * from './store';
export * from './router';

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
      useValue: appState => appState,
      multi: true
    }
  ]
})
export class StoreModule {
  static forRoot(config: StoreConfig): ModuleWithProviders {
    let initialReducer = createReducer(config.reducers);

    // Merge router reducer
    if (config.enableRouter) {
      initialReducer = reduceReducers(initialReducer, routerReducer);
    }

    return {
      ngModule: StoreModule,
      providers: [
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
          useValue: initialReducer,
          multi: true
        },
        ,
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
          useValue: initialReducer,
          multi: true
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
