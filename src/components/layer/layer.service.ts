import { Subscription } from 'rxjs/Subscription';
import { LayerDirective } from './layer.component';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LayerService {

  private visibleLayersChanged$ = new EventEmitter<LayerDirective[]>();
  @Output()
  get visibleLayersChanged(): Observable<LayerDirective[]> {
    return this.visibleLayersChanged$.asObservable();
  };

  private subscriptions = new Map<LayerDirective, Subscription>();
  private layers = new Map<string, LayerDirective>();

  get visibleLayers() {
    return Array.from(this.subscriptions.keys()).filter(layer => layer.visible);
  }

  get currentZIndex() {
    return this.visibleLayers
               .map(layer => layer.zIndex)
               .reduce((pzIndex, czIndex) => Math.max(pzIndex, czIndex), 0);
  }

  constructor() { }

  open(layerName, data?): Observable<any> {
    if (this.layers.has(layerName)) {
      return this.layers.get(layerName).open(data);
    } else {
      return Observable.throw('Layer not found. ' + layerName);
    }
  }

  close(layerName) {
    if (this.layers.has(layerName)) {
      this.layers.get(layerName).close();
    }
  }

  register(layer: LayerDirective) {
    let sub = layer.visibilityChange.subscribe(visible => {
      this.visibleLayersChanged$.emit(this.visibleLayers);
    });

    this.subscriptions.set(layer, sub);
    if (layer.name) {
      this.layers.set(layer.name, layer);
    }
  }

  unregister(layer: LayerDirective) {
    layer.close();
    if (layer.name) {
      this.layers.delete(name);
    }
    this.subscriptions.get(layer).unsubscribe();
    this.subscriptions.delete(layer);
  }
}

