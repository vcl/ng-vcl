import { Reducers, Reducer, StoreState } from './store';

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

export function reduceReducers(...reducers) {
  return (state, action) =>
    reducers.reduce(
      (prevState, reducer) => reducer(prevState, action),
      state
    );
}

export function createReducer(reducers: any): Reducer<StoreState> {
  const reducerArr = Array.isArray(reducers) ? reducers : [ reducers ];
  return reduceReducers(...reducerArr.map( reducer => {
    if (typeof reducer === 'object' && reducer) {
      return combineReducers(reducer);
    } else if (typeof reducer === 'function') {
      return reducer;
    } else {
      return undefined;
    }
  }).filter(reducer => reducer !== undefined));
}

export function combineReducers(reducers: Reducers): Reducer<any> {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};

  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  const finalReducerKeys = Object.keys(finalReducers);

  return function combination(state = {}, action) {
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);

      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? Object.assign({}, state, nextState) : state;
  };
}
