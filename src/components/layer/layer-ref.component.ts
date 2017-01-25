import { ViewContainerRef, ReflectiveInjector, Injectable } from '@angular/core';
import { ComponentType, defineMetadata, getMetadata } from './../../core/index';
import { ComponentWormholeRef, WormholeRef, ComponentWormhole } from './../../directives/wormhole/wormhole.module';
import { LayerRef, LayerOptions } from './layer-ref';
import { LayerService } from './layer.service';

const COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';

export interface ComponentLayerOptions<T> extends LayerOptions {
  component: ComponentType<T>;
}

export function Layer<T>(opts: ComponentLayerOptions<T>) {
  return function (target) {
    Injectable()(target);
    defineMetadata(COMPONENT_LAYER_ANNOTATION_ID, opts, target);
  };
}

class LayerWormholeRef<T> extends ComponentWormholeRef<T> {

  constructor(private layer: ComponentLayerRef<T>, viewContainerRef: ViewContainerRef, component: ComponentType<T>) {
    super(viewContainerRef, component);
  }

  createInjector() {
    const injector = super.createInjector();
    // The created injector injects this instance as LayerRef
    // It is used in the component instance created within the wormhole
    return ReflectiveInjector.resolveAndCreate([{
      provide: LayerRef,
      useValue: this.layer
    }], injector);
  }
}

export function getComponentLayerOpts<T>(layerRef: ComponentLayerRef<T>) {
  const opts = getMetadata(COMPONENT_LAYER_ANNOTATION_ID, (layerRef as any).constructor ) as ComponentLayerOptions<T>;
  return opts || false;
}

export class ComponentLayerRef<T> extends LayerRef {
  create(viewContainerRef: ViewContainerRef, initialData?: any) {
    const opts = getComponentLayerOpts(this);
    return opts ? new LayerWormholeRef<T>(this, viewContainerRef, opts.component) : null;
  }
}
