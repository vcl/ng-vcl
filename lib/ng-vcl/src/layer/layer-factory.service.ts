import { Injectable, Injector, ViewContainerRef, NgZone } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { ComponentLayerRef, CreateLayerOptions } from './component-layer-ref';

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
