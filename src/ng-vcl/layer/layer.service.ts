import { Injectable, Injector, Type } from '@angular/core';
import { LayerManagerService } from './layer-manager.service';
import { LayerRef, DynamicLayerRef, LayerAttributes } from './layer-ref';
import { LayerOptions } from './layer-container.component';

@Injectable()
export class LayerService {

  constructor(private layerManager: LayerManagerService, private injector: Injector) { }

  hasVisibleLayers() {
    return this.layerManager.visibleLayers.length > 0;
  }

  getVisibleLayers() {
    return [...this.layerManager.visibleLayers];
  }

  getTopLayer(): LayerRef | undefined {
    return [...this.layerManager.visibleLayers].pop();
  }

  closeAll() {
    this.layerManager.visibleLayers.forEach(layer => layer.close());
  }

  closeTop() {
    const topLayer = this.getTopLayer();
    if (topLayer) {
      topLayer.close();
    }
  }

  create(component: Type<any>, opts?: LayerOptions): LayerRef {
    const layerRef = new DynamicLayerRef(() => {
      this.layerManager._register(layerRef, component, this.injector, opts);
    }, () => {
      this.layerManager._unregister(layerRef);
    });

    return layerRef;
  }

  open(component: Type<any>, attrs?: LayerAttributes, opts?: LayerOptions) {
    const layerRef = this.create(component, opts);
    layerRef.open(attrs);
    return layerRef;
  }
}
