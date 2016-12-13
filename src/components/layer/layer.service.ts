import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { LayerDirective, LayerBaseComponent } from './layer.component';
import { Injectable, EmbeddedViewRef, Output, EventEmitter, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

interface VisibleLayers { [key: string]: LayerDirective[]; };

@Injectable()
export class LayerService {

  private layerNameMap = new Map<string, LayerDirective>();
  private baseNameMap = new Map<string, LayerBaseComponent>();
  private layerMap = new Map<LayerDirective, Subscription>();
  private visibleLayers: VisibleLayers = {};
  private _visibleLayers = new BehaviorSubject<VisibleLayers>(this.visibleLayers);

  visibleLayersFor(base = 'default'): Observable<LayerDirective[]> {
    return this._visibleLayers.asObservable().map(layers => layers[base] || []).distinctUntilChanged();
  }

  getVisibleLayers(base = 'default') {
    return this.visibleLayers[base] || [];
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

  open(layerName: string, data?): Observable<any> {
    if (this.layerNameMap.has(layerName)) {
      return this.layerNameMap.get(layerName).open(data);
    } else {
      return Observable.throw('Layer not found: ' + layerName);
    }
  }

  close(layerName: string) {
    if (this.layerNameMap.has(layerName)) {
      this.layerNameMap.get(layerName).close();
    }
  }

  register(layer: LayerDirective) {
    if (layer.name && this.layerNameMap.has(layer.name)) {
      throw 'Duplicate vcl-layer: ' + layer.name;
    }

    this.layerMap.set(layer, layer.visibilityChange$.subscribe(() => {
      if (!this.visibleLayers[layer.base]) {
        this.visibleLayers[layer.base] = [];
      }
      if (layer.visible) {
        this.visibleLayers[layer.base] =  [...this.visibleLayers[layer.base], layer];
      } else {
        this.visibleLayers[layer.base] =  this.visibleLayers[layer.base].filter(l => layer !== l);
      }
      this._visibleLayers.next(this.visibleLayers);
    }));
    if (layer.name) {
      this.layerNameMap.set(layer.name, layer);
    }
  }

  unregister(layer: LayerDirective) {
    layer.close();
    if (layer.name) {
      this.layerNameMap.delete(layer.name);
    }
    const sub = this.layerMap.get(layer);
    if (sub && !sub.closed) {
      sub.unsubscribe();
    }
    this.layerMap.delete(layer);
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
    this.layerMap.forEach(sub => {
      if (sub && !sub.closed) {
        sub.unsubscribe();
      }
    });
    this.layerMap.clear();
    this.layerNameMap.clear();
  }
}
