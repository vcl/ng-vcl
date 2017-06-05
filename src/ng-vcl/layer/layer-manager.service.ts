import { Injectable, Injector, TemplateRef, Type, ApplicationRef } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Wormhole, DomWormholeHost } from '../wormhole/index';
import { LayerRef, DynamicLayerRef, LayerAttributes } from './layer-ref';
import { LayerContainerComponent, LayerOptions } from './layer-container.component';

@Injectable()
export class LayerManagerService {

  private layerWormholeMap = new Map<LayerRef, Wormhole>();

  baseZIndex: number = 1000;
  visibleLayers: LayerRef[] = [];

  private host: DomWormholeHost;

  constructor(appRef: ApplicationRef, private injector: Injector) {
    this.host = new DomWormholeHost(appRef, undefined, injector);
  }

  get currentZIndex() {
    return this.baseZIndex + (this.visibleLayers.length * 10);
  }

  private addVisibleLayer(layer: LayerRef) {
    this.visibleLayers = [...this.visibleLayers, layer];
  }

  private removeVisibleLayer(layer: LayerRef) {
    this.visibleLayers = this.visibleLayers.filter(l => l !== layer);
  }

  _register(layerRef: LayerRef, target: TemplateRef<any> | Type<any>, injector: Injector, opts?: LayerOptions) {
    const containerWormholeRef = this.host.createWormhole(LayerContainerComponent);
    const layerSub = layerRef.state$.subscribe((state) => {
      if (state.visible && !containerWormholeRef.isConnected) {
        containerWormholeRef.connect({
          layerRef,
          layerAttrs: state.attrs,
          layerOpts: opts || {},
          layerTarget: target,
          layerInjector: injector,
          zIndex: this.currentZIndex,
        });
        this.addVisibleLayer(layerRef);
      } else if (state.visible) {
        containerWormholeRef.setAttributes({
          layerAttrs: state.attrs
        });
      } else {
        if (containerWormholeRef.compInstance) {
          containerWormholeRef.compInstance.animateLeave().then(() => {
            containerWormholeRef.disconnect();
            this.removeVisibleLayer(layerRef);
          });
        }
      }
    });

    this.layerWormholeMap.set(layerRef, containerWormholeRef);
  }

  _unregister(layer: LayerRef) {
    const wormhole = this.layerWormholeMap.get(layer);
    if (wormhole) {
      wormhole.disconnect();
    }
    this.layerWormholeMap.delete(layer);
  }

  ngOnDestroy() {
    this.layerWormholeMap.forEach((meta, layer) => this._unregister(layer));
    this.host.clearWormholes();
  }
}
