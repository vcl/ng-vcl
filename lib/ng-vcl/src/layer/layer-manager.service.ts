import { Injectable, Injector, TemplateRef, Type, ApplicationRef } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { Wormhole, DomWormholeHost } from '../wormhole/index';
import { LayerRef, DynamicLayerRef, LayerAttributes } from './layer-ref';
import { LayerContainerComponent, LayerOptions } from './layer-container.component';

@Injectable()
export class LayerManagerService {

  private layerMetaMap = new Map<LayerRef, { wormhole: Wormhole, subscription: Subscription }>();

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

    this.layerMetaMap.set(layerRef, {wormhole: containerWormholeRef, subscription: layerSub});
  }

  _unregister(layer: LayerRef) {
    const meta = this.layerMetaMap.get(layer);
    if (meta) {
      meta.wormhole.disconnect();
      meta.subscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.layerMetaMap.forEach((meta, layer) => this._unregister(layer));
    this.host.clearWormholes();
  }
}
