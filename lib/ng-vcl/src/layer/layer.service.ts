import { Injectable, Injector } from '@angular/core';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';
import { LayerOptions } from './interfaces';
import { LayerRef } from './layer-ref';

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  constructor(private injector: Injector) { }

  create<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, opts: LayerOptions = {}): LayerRef<TData, TResult> {
    class TransientComponentLayerRef extends LayerRef<TData, TResult> {
      templateOrComponent = component;
    }

    return new TransientComponentLayerRef(this.injector, opts);
  }

  open<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, opts: LayerOptions = {}): LayerRef<TData, TResult> {
    const layer = this.create(component, opts);
    layer.open(opts);
    return layer;
  }
}
