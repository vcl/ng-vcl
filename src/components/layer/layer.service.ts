import { Injectable, EmbeddedViewRef, Output, EventEmitter, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef, ReflectiveInjector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ComponentType } from './../../core/index';
import { ComponentWormhole } from './../../directives/wormhole/wormhole';
import { LayerBaseComponent } from './layer-base.component';
import { LayerDirective } from './layer.directive';
import { LayerReference, LayerDirectiveReference, LayerComponentReference, LayerOptions } from './layer.references';

@Injectable()
export class LayerService {
  private baseNameMap = new Map<string, LayerBaseComponent>();

  private layerDirectiveMap = new Map<LayerDirective, LayerDirectiveReference>();
  // private layers = new Set<LayerReference>();
  private layers = new Map<LayerReference, Subscription>();

  private layersChange = new Subject<LayerReference>();

  constructor(private defaultInjector: Injector) { }

  getVisibleLayersFor$(base = 'default') {
    return this.layersChange.scan<LayerReference, LayerReference[]>((layers, layerRef) => {
      if (layerRef.visible) {
        return [...layers, layerRef];
      } else {
        return layers.filter(layer => layer !== layerRef);
      }
    }, []);
  }

  getLayersFor(base = 'default') {
    return Array.from(this.layers.keys()).filter(li => li.base === base);
  }

  getVisibleLayersFor(base = 'default') {
    return this.getLayersFor(base).filter(layer => !!layer.visible);
  }

  hasVisibleLayers(base = 'default') {
    return this.getLayersFor(base).some(layer => layer.visible);
  }

  closeAll(base = 'default') {
    this.getVisibleLayersFor(base).forEach(layer => layer.close());
  }

  closeTop(base = 'default') {
    const layer = this.getVisibleLayersFor(base).slice(-1)[0];
    if (layer) layer.close();
  }

  registerComponent<T>(layer: ComponentType<T>, opts: LayerOptions = {}): LayerComponentReference<T> {
    let layerRef = new LayerComponentReference<T>(opts, this.defaultInjector, layer);
    this.registerReference(layerRef);
    return layerRef;
  }

  registerDirective(layer: LayerDirective, opts: LayerOptions = {}): LayerDirectiveReference {
    let layerRef = new LayerDirectiveReference(opts, layer);
    this.layerDirectiveMap.set(layer, layerRef);
    this.registerReference(layerRef);
    return layerRef;
  }

  private registerReference(layerRef: LayerReference) {
    this.layers.set(layerRef, layerRef.subscribe(layerRef => {
      this.layersChange.next(layerRef);
    }));
  }

  public disposeReference(layerRef: LayerReference) {
    const sub = this.layers.get(layerRef);
    if (sub && !sub.closed) {
      sub.unsubscribe();
    }
    this.layers.delete(layerRef);
  }

  unregisterDirective(layer: LayerDirective) {
    let layerRef = this.layerDirectiveMap.get(layer);
    if (layerRef) {
      layerRef.close();
      this.layers.delete(layerRef);
      this.layerDirectiveMap.delete(layer);
      this.disposeReference(layerRef);
    }
  }

  registerBase(layerBase: LayerBaseComponent, opts: LayerOptions = {}) {
    if (layerBase.name && this.baseNameMap.has(layerBase.name)) {
      throw 'Duplicate vcl-layer-base: ' + layerBase.name;
    }
    this.baseNameMap.set(layerBase.name , layerBase);
  }

  unregisterBase(layerBase: LayerBaseComponent) {
    this.baseNameMap.delete(layerBase.name);
  }

  ngOnDestroy() {
    this.layerDirectiveMap.clear();
    this.layers.forEach((sub) => {
      if (sub && !sub.closed) {
        sub.unsubscribe();
      }
    });
    this.layers.clear();
  }
}
