import { Injectable, Injector } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { LayerBaseComponent } from './layer-base.component';
import { LayerRef } from './layer-ref';

export interface LayerOptions {
  base?: string;
  modal?: boolean;
  offClickClose?: boolean;
  transparent?: boolean;
  fill?: boolean;
  stickToBottom?: boolean;
  gutterPadding?: boolean;
  customClass?: string;
}

const LAYER_OPTIONS_DEFAULTS: LayerOptions = {
  base: 'default',
  modal: false,
  transparent: false,
  fill: false,
  stickToBottom: false,
  gutterPadding: false,
};

@Injectable()
export class LayerService {

  private bases = new Map<string, LayerBaseComponent>();

  private layerRegister = new ReplaySubject<{
    register: boolean;
    ref: LayerRef;
    opts?: LayerOptions;
  }>();

  getLayers$(base = 'default') {
    return this.layerRegister.asObservable().filter(lr => !!lr.opts && lr.opts.base === base);
  }

  getVisibleLayers(base = 'default') {
    const layerBase = this.bases.get(base);
    if (layerBase) {
      return [...layerBase.visibleLayers];
    } else {
      throw 'Invalid base: ' + base;
    }
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

  register(layer: LayerRef, opts: LayerOptions) {
    if (!(layer instanceof LayerRef)) {
      throw 'Invalid layer';
    }

    // Merge defaults
    opts = Object.assign({}, LAYER_OPTIONS_DEFAULTS, opts);

    this.layerRegister.next({
      ref: layer,
      register: true,
      opts
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
