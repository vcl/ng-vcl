import { Subscription } from 'rxjs/Subscription';
import { LayerDirective } from './../components/layer/layer.component';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LayerManagerService {

  private visibleLayersChanged$ = new EventEmitter<LayerDirective[]>();
  @Output()
  get visibleLayersChanged(): Observable<LayerDirective[]> {
    return this.visibleLayersChanged$.asObservable();
  };

  private layers = new Map<LayerDirective, Subscription>();

  get visibleLayers() {
    return Array.from(this.layers.keys()).filter(layer => layer.visible);
  }

  get currentZIndex() {
    return this.visibleLayers
               .map(layer => layer.zIndex)
               .reduce((pzIndex, czIndex) => Math.max(pzIndex, czIndex), 0);
  }

  constructor() { }

  register(layer: LayerDirective) {
    let sub = layer.visibilityChange.subscribe(visible => {
      this.visibleLayersChanged$.emit(this.visibleLayers);
    });

    this.layers.set(layer, sub);
  }

  unregister(layer: LayerDirective) {
    layer.close();
    this.layers.get(layer).unsubscribe();
    this.layers.delete(layer);
  }
}

