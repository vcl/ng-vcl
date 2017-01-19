import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/filter';
import 'rxjs/operator/map';
import 'rxjs/operator/distinctUntilChanged';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { LayerBaseComponent } from './layer-base.component';
import { LayerRef } from './layer.references';

@Injectable()
export class LayerService {
  private bases: string[] = [];
  private visibleLayers = new Map<string, LayerRef[]>();
  private layers = new Map<LayerRef, Subscription>();
  private baseLayersChange = new Subject<string>();

  visibleLayers$(base = 'default'): Observable<LayerRef[]> {
    return this.baseLayersChange.filter(updatedBase => updatedBase === base)
                                .map(() => this.getVisibleLayers(base))
                                .distinctUntilChanged();
  }

  getLayers(base = 'default') {
    return Array.from(this.layers.keys()).filter(li => li.base === base);
  }

  getVisibleLayers(base = 'default') {
    return [...(this.visibleLayers.get(base) || [])];
  }

  hasVisibleLayers(base?: string) {
    return this.getVisibleLayers(base).length > 0;
  }

  closeAll(base?: string) {
    this.getVisibleLayers(base).forEach(layer => layer.close());
  }

  closeTop(base?: string) {
    const layer = this.getVisibleLayers(base).pop();
    if (layer) layer.close();
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
    if (layerBase.name && this.bases.indexOf(layerBase.name) >= 0) {
      throw 'Duplicate vcl-layer-base: ' + layerBase.name;
    }
    this.bases.push(layerBase.name);
  }

  unregisterBase(layerBase: LayerBaseComponent) {
    this.bases = this.bases.filter(base => base !== layerBase.name);
  }

  ngOnDestroy() {
    this.layers.forEach((sub, layerRef) => this.unregister(layerRef));
  }
}
