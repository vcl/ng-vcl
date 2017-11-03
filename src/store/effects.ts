import { Inject, Injectable, InjectionToken, Injector, OnDestroy, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/catch';
import { Store, StoreErrorAction } from './store';

declare var Reflect: any;
const EFFECTS_METADATA_KEY = 'ng-vcl/effects';

export const STORE_EFFECTS = new InjectionToken('store.effects');
export const STORE_CHILD_EFFECTS = new InjectionToken('store.child.effects');

export function Effect(): PropertyDecorator {
  return function(target: any, propertyName: string) {
    if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
      Reflect.defineMetadata(EFFECTS_METADATA_KEY, [], target);
    }
    const effectProperties: string[] = Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
    Reflect.defineMetadata(EFFECTS_METADATA_KEY, [ ...effectProperties, propertyName ], target);
  };
}

export function getEffectsMetadata(instance: any): string[] {
  const target = Object.getPrototypeOf(instance);
  if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
    return [];
  }
  return Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
}


export class Effects implements OnDestroy {

  private effectSubs: Subscription[] = [];

  constructor(
    protected store: Store,
    protected effects: any[],
    protected injector: Injector
  ) {

  }

  init() {
    (this.effects || []).forEach(effectClasses => {
      if (Array.isArray(effectClasses)) {
        effectClasses.forEach(effectClass => {
          const effect = this.injector.get(effectClass);
          if (effect) {
            this.addEffect(effect);
          }
        });
      }
    });
  }

  addEffect(effect: any) {
    if (effect) {
      const properties = getEffectsMetadata(effect);
      const effects$ = Observable.merge(...(properties.map(property => effect[property])));
      const sub = effects$.catch(err => {
        // Catch effect error and dispatch StoreErrorAction
        return Observable.of(new StoreErrorAction(err));
      }).subscribe(this.store);
      this.effectSubs.push(sub);
    }
  }

  ngOnDestroy() {
    [...this.effectSubs].filter(sub => sub && !sub.closed).forEach(sub => sub.unsubscribe());
  }
}

@Injectable()
export class RootEffects extends Effects {
  constructor(
    protected store: Store,
    @Optional()
    @Inject(STORE_EFFECTS)
    effects: any[],
    injector: Injector
  ) {
    super(store, effects, injector);
  }
}

@Injectable()
export class ChildEffects extends Effects {
  constructor(
    protected store: Store,
    @Optional()
    @Inject(STORE_CHILD_EFFECTS)
    effects: any[],
    injector: Injector
  ) {
    super(store, effects, injector);
  }
}
