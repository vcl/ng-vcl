import { Injectable, Injector } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { LayerRef } from './layer-ref';

@Injectable()
export class LayerService {

  baseZIndex: number = 1000;

  visibleLayers: LayerRef[] = [];

  private layerRegister = new ReplaySubject<{
    register: boolean;
    ref: LayerRef;
    injector?: Injector;
  }>();

  get currentZIndex() {
    return this.baseZIndex + (this.visibleLayers.length * 10);
  }

  getLayers$(base = 'default') {
    return this.layerRegister.asObservable().filter(lr => !!lr.ref && lr.ref.base === base);
  }

  hasVisibleLayers() {
    return this.visibleLayers.length > 0;
  }

  getTopLayer() {
    return [...this.visibleLayers].pop();
  }

  closeAll(base?: string) {
    this.visibleLayers.forEach(layer => layer.close());
  }

  closeTop(base?: string) {
    const layer = this.getTopLayer();
    if (layer) {
      layer.close();
    }
  }

  addVisibleLayer(layer: LayerRef) {
    this.visibleLayers = [...this.visibleLayers, layer];
  }

  removeVisibleLayer(layer: LayerRef) {
    this.visibleLayers = this.visibleLayers.filter(l => l !== layer);
  }

  register(layer: LayerRef, injector: Injector) {
    if (!(layer instanceof LayerRef)) {
      throw 'Invalid layer';
    }

    this.layerRegister.next({
      ref: layer,
      injector,
      register: true
    });
  }

  unregister(layer: LayerRef) {
    this.layerRegister.next({
      ref: layer,
      register: false
    });
  }
}
