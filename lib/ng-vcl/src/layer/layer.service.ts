import { Injectable, Injector } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { LayerConfig } from './types';
import { DynamicLayerRef, LayerRef } from './layer-ref';

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  constructor(private injector: Injector) { }

  create<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, config?: LayerConfig): LayerRef<TData, TResult> {
    return new DynamicLayerRef({
      injector: this.injector,
      config,
      templateOrComponent: component,
    });
  }

  open<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, config?: LayerConfig): LayerRef<TData, TResult> {
    const layer = this.create(component);
    layer.open(config);
    return layer;
  }
}
