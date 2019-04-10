import { Injectable, Injector, ViewContainerRef, NgZone } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { PositionStrategy } from '@angular/cdk/overlay';
import { ComponentLayerRef } from './component-layer-ref';

type ComponentLayerRefCtor<TComponent> = new(component: ComponentType<TComponent>, zone: NgZone, injector: Injector, opts: CreateLayerOptions<TComponent>) => ComponentLayerRef;

export interface LayerOptions {
  position?: PositionStrategy;
  modal?: boolean;
}

export interface CreateLayerOptions<TComponent> extends LayerOptions {
  viewContainerRef?: ViewContainerRef;
  useClass?: ComponentLayerRefCtor<TComponent>;
}

@Injectable({
  providedIn: 'root'
})
export class LayerFactory {

  constructor(private injector: Injector, private zone: NgZone) { }

  create<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, opts: CreateLayerOptions<TComponent> = {}): ComponentLayerRef<TData, TResult> {
    const cls = opts.useClass || ComponentLayerRef;
    return new cls(component, this.zone, this.injector, opts);
  }

}
