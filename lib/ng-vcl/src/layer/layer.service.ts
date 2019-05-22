import { Injectable, Injector } from '@angular/core';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';
import { LayerConfig } from './config';
import { LayerRef } from './layer-ref';

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  constructor(private injector: Injector) { }

  create<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, config?: LayerConfig): LayerRef<TData, TResult> {
    class TransientComponentLayerRef extends LayerRef<TData, TResult> {
      templateOrComponent = component;
      getLayerConfig() {
        const defaultConfig = super.getLayerConfig();
        return config || defaultConfig;
      }
    }

    return new TransientComponentLayerRef(this.injector);
  }

  open<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, config?: LayerConfig): LayerRef<TData, TResult> {
    const layer = this.create(component);
    layer.open(config);
    return layer;
  }
}
