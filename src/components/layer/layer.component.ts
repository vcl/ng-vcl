import { Injectable, ReflectiveInjector, Injector } from '@angular/core';
import { Wormhole, ComponentWormhole } from './../../directives/wormhole/wormhole.module';
import { ComponentType } from './../../core/index';
import { LayerService } from './layer.service';
import { LayerRef, LayerData } from './layer.references';

class LayerComponentWormhole<T> extends ComponentWormhole<T> {

  constructor(private layerRef: LayerRef, componentClass: ComponentType<T>, data: any) {
    super(componentClass, data);
  }

  createInjector() {
    const injector = super.createInjector();
    // The created injector injects this instance as LayerRef
    // It is used in the component instance created within the wormhole
    return ReflectiveInjector.resolveAndCreate([{
      provide: LayerRef,
      useValue: this.layerRef
    }], injector);
  }

}

export abstract class ComponentLayerRef<T> extends LayerRef {
  protected abstract component: ComponentType<T>;
  wormhole: ComponentWormhole<T>;

  initialize(layerService: LayerService)  {
    layerService.register(this);
  }

  setData(data?: LayerData) {
    // Update wormhole data
    // Change detection is triggered within setData()
    this.wormhole.setData(data);
  }

  get instance(): T {
    return this.visible ? this.wormhole.compRef.instance : null;
  }

  createWormhole(data?: any) {
    return new LayerComponentWormhole(this, this.component, data);
  }
}
