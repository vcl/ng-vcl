import { Injectable, ReflectiveInjector, Injector } from '@angular/core';
import { Wormhole, ComponentWormhole } from './../../directives/wormhole/wormhole.module';
import { ComponentType } from './../../core/index';
import { LayerService } from './layer.service';
import { LayerRef, LayerData } from './layer.references';

export abstract class ComponentLayerRef<T> extends LayerRef {

  private injector: ReflectiveInjector;

  protected abstract component: ComponentType<T>;

  initialize(layerService: LayerService, injector: Injector)  {
    // The created injector injects this instance as LayerRef
    // It is used in the component instance created within the wormhole
    this.injector = ReflectiveInjector.resolveAndCreate([{
      provide: LayerRef,
      useValue: this
    }], injector);

    layerService.register(this);
  }

  setData(data?: LayerData) {
    if (this.wormhole instanceof ComponentWormhole) {
      // Update wormhole data
      // Change detection is triggered within setData()
      this.wormhole.setData(data);
    }
  }

  createWormhole() {
    return new LayerComponentWormhole(this, this.component);
  }
}
