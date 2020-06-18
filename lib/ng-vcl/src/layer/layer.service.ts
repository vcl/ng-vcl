import { Injectable, Injector } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { LayerConfig } from './types';
import { ComponentLayerRef, LayerRef } from './layer-ref';

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  constructor(private injector: Injector) { }

  create<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, _config?: LayerConfig): LayerRef<TData, TResult> {
    class DynamicComponentLayerRef extends ComponentLayerRef {
      getComponent() {
        return component;
      }
      createLayerConfig(config?: LayerConfig) {
        return super.createLayerConfig(_config, config);
      }
    }
    return new DynamicComponentLayerRef(this.injector);
  }

  open<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, config?: LayerConfig): LayerRef<TData, TResult> {
    const layer = this.create(component);
    layer.open(config);
    return layer;
  }
}
