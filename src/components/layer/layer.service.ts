import { Injectable, Injector } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/operator/filter';
import 'rxjs/operator/map';
import 'rxjs/operator/distinctUntilChanged';
import { LayerBaseComponent } from './layer-base.component';
import { LayerRef } from './layer-ref';

@Injectable()
export class LayerService {

  private bases = new Map<string, LayerBaseComponent>();

  private layerRegister = new ReplaySubject<{
    register: boolean;
    ref: LayerRef;
  }>();

  getLayers$(base = 'default') {
    return this.layerRegister.asObservable().filter(l => l.ref.opts.base === base);
  }

  getVisibleLayers(base = 'default') {
    if (!this.bases.has(base)) {
      throw 'Invalid base';
    }
    return [...this.bases.get(base).visibleLayers];
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

  register(layer: LayerRef) {
    if (!(layer instanceof LayerRef)) {
      throw 'Invalid layer';
    }
    this.layerRegister.next({
      ref: layer,
      register: true
    });
  }

  unregister(layer: LayerRef) {
    this.layerRegister.next({
      ref: layer,
      register: false
    });
  }

  registerBase(layerBase: LayerBaseComponent) {
    if (Array.from(this.bases.keys()).includes(layerBase.name)) {
      throw 'Duplicate vcl-layer-base: ' + layerBase.name;
    }
    this.bases.set(layerBase.name, layerBase);
  }

  unregisterBase(layerBase: LayerBaseComponent) {
    this.bases.delete(layerBase.name);
  }
}
