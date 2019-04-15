import { Injectable, Injector } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { LayerOptions, Layer } from './interfaces';
import { LayerBase } from './layer-base';

@Injectable({
  providedIn: 'root'
})
export class LayerService {

  constructor(private injector: Injector) { }

  create<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, opts: LayerOptions = {}): Layer<TData, TResult> {
    class TransientComponentLayer extends LayerBase<TData, TResult, TComponent> {
      protected getComponent(): ComponentType<any> {
        return component;
      }
    }

    return new TransientComponentLayer(this.injector, opts);
  }

  open<TComponent = any, TData = any, TResult = any>(component: ComponentType<TComponent>, data: any, opts: LayerOptions = {}): Layer<TData, TResult> {
    const layer = this.create(component, opts);
    layer.open(data, opts);
    return layer;
  }
}
