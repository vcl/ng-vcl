import { Injectable, EmbeddedViewRef, Output, EventEmitter, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef, ReflectiveInjector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ComponentType } from './../../core/index';
import { ComponentWormhole } from './../../directives/wormhole/wormhole';
import { LayerBaseComponent } from './layer-base.component';
import { LayerDirective } from './layer.directive';
import { LayerRef, LayerComponentRef, LayerOptions } from './layer.references';

@Injectable()
export class LayerService {
  private baseNameMap = new Map<string, LayerBaseComponent>();
  private visibleLayers = new Map<string, LayerRef[]>();
  private layers = new Map<LayerRef, Subscription>();
  private baseLayersChange = new Subject<string>();

  constructor(private defaultInjector: Injector) { }

  visibleLayers$(base = 'default') {
    return this.baseLayersChange.filter(updatedBase => updatedBase === base)
                                .map(() => this.getVisibleLayers(base))
                                .distinctUntilChanged();
  }

  getLayers(base = 'default') {
    return Array.from(this.layers.keys()).filter(li => li.base === base);
  }

  getVisibleLayers(base = 'default') {
    return this.visibleLayers.get(base) || [];
  }

  hasVisibleLayers(base = 'default') {
    return this.getVisibleLayers(base).length > 0;
  }

  closeAll(base = 'default') {
    this.getVisibleLayers(base).forEach(layer => layer.close());
  }

  closeTop(base = 'default') {
    const layer = this.getVisibleLayers(base).slice(-1)[0];
    if (layer) layer.close();
  }

  create<T>(compClass: ComponentType<T>, opts: LayerOptions = {}): LayerRef {
    if (typeof compClass === 'function') {
      const layerRef = new LayerComponentRef<T>(compClass, opts, this.defaultInjector);
      this.register(layerRef);
      return layerRef;
    } else {
      throw 'Invalid component class';
    }
  }

  register(layerRef: LayerRef) {
    if (!(layerRef instanceof LayerRef)) {
      throw 'Invalid layerRef';
    }
    this.layers.set(layerRef, layerRef.visible$.subscribe(visible => {
      const layerRefs = this.visibleLayers.get(layerRef.base) || [];
      this.visibleLayers.set(layerRef.base, visible ? [...layerRefs, layerRef] : layerRefs.filter(lr => lr !== layerRef));
      this.baseLayersChange.next(layerRef.base);
    }));
  }

  unregister(layerRef: LayerRef) {
    layerRef.close();
    const sub = this.layers.get(layerRef);
    if (sub && !sub.closed) {
      sub.unsubscribe();
    }
    this.layers.delete(layerRef);
  }

  registerBase(layerBase: LayerBaseComponent) {
    if (layerBase.name && this.baseNameMap.has(layerBase.name)) {
      throw 'Duplicate vcl-layer-base: ' + layerBase.name;
    }
    this.baseNameMap.set(layerBase.name , layerBase);
  }

  unregisterBase(layerBase: LayerBaseComponent) {
    this.baseNameMap.delete(layerBase.name);
  }

  ngOnDestroy() {
    this.layers.forEach((sub, layerRef) => this.unregister(layerRef));
  }
}
