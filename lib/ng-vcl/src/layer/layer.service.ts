import { Injectable, Injector } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { LayerConfig } from './types';
import { ComponentLayerRef } from './layer-ref';

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  constructor(private injector: Injector) { }

  create<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, config?: LayerConfig): ComponentLayerRef<TData, TResult> {
    class TransientComponentLayerRef extends ComponentLayerRef<TData, TResult> {
      component = component;
      getLayerConfig() {
        const defaultConfig = super.getLayerConfig();
        return config || defaultConfig;
      }
    }

    return new TransientComponentLayerRef(this.injector);
  }

  open<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, config?: LayerConfig): ComponentLayerRef<TData, TResult> {
    const layer = this.create(component);
    layer.open(config);
    return layer;
  }
}
