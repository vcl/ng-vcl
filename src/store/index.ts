import { reduceReducers, combineReducers } from './utils';
import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { Store, STORE_INITIAL_STATE, STORE_INITIAL_REDUCER, Reducer, Reducers, StoreState } from './store';
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
      provide: STORE_INITIAL_REDUCER,
      useValue: appState => appState
    }
  ]
})
export class StoreModule {
  static forRoot(config: StoreConfig): ModuleWithProviders {

    let initialReducer: Reducer<StoreState>;

    if (Array.isArray(config.reducers)) {
      let reducers = (config.reducers as any).map( reducer => {
        if (typeof reducer === 'object' && reducer) {
          return combineReducers(reducer);
        } else if (typeof reducer === 'function') {
          return reducer;
        } else {
          throw 'Invalid reducer in config.reducers';
        }
      });
      initialReducer = reduceReducers(...reducers);
    } else if (typeof config.reducers === 'function') {
      initialReducer = reduceReducers(config.reducers);
    } else if (typeof config.reducers === 'object' && config.reducers) {
      initialReducer = combineReducers(config.reducers);
    } else {
      initialReducer = appState => appState;
    }

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
          provide: STORE_INITIAL_REDUCER,
          useValue: initialReducer
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
}
