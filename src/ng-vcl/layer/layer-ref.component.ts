import { ViewContainerRef, ReflectiveInjector, Injectable, Type } from '@angular/core';
import { defineMetadata } from './../core/index';
import { ComponentWormhole, Wormhole } from '../wormhole/index';
import { LayerRef } from './layer-ref';
import { LayerService } from './layer.service';

export const COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';

// The @Layer annotation
export function Layer<T>(component: Type<T>) {
  return function (target) {
    Injectable()(target);
    defineMetadata(COMPONENT_LAYER_ANNOTATION_ID, component, target);
  };
}

// A component wormhole that injects the LayerRef
export class LayerComponentWormhole<T> extends ComponentWormhole<T> {
  constructor(private layer: LayerRef, viewContainerRef: ViewContainerRef, component: Type<T>) {
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
