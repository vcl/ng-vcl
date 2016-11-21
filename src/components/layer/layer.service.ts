import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { LayerDirective } from './layer.component';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LayerService {

  private layerNameMap = new Map<string, LayerDirective>();
  private layerMap = new Map<LayerDirective, Subscription>();

  private _visibleLayers = new Subject<LayerDirective>();
  _visibleLayers$: Observable<LayerDirective[]> = this._visibleLayers.asObservable().scan<LayerDirective, LayerDirective[]>((accLayers, layer) => {
    if (layer.visible) {
      return [...accLayers, layer];
    } else {
      return accLayers.filter(l => layer !== l);
    }
  }, []);

  constructor() { }

  visibleLayersFor(base = 'default') {
    return this._visibleLayers$.map(layers => layers.filter(layer => layer.base !== base));
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

  register(layer: LayerDirective, base = 'default') {
    if (layer.name && this.layerNameMap.has(layer.name)) {
      throw 'Duplicate layer name: ' + layer.name;
    }

    this.layerMap.set(layer, layer.visibilityChange$.subscribe(() => {
      this._visibleLayers.next(layer);
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

