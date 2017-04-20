import { Injectable,  ApplicationRef, Injector } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import { Wormhole, DomWormholeHost } from '../wormhole/index';
import { LayerService } from './layer.service';
import { LayerRef, LayerOptions, LayerAttributes } from './layer-ref';
import { LayerContainerComponent } from './layer-container.component';

@Injectable()
export class LayerManagerService extends DomWormholeHost {

  layerMap = new Map<LayerRef, {
    subscription: Subscription;
    wormhole: Wormhole;
  }>();
  sub: Subscription;

  name: string = 'default';

  constructor(private layerService: LayerService, appRef: ApplicationRef, private injector: Injector) {
    super(appRef, undefined, injector);
    this.sub = this.layerService
                   .getLayers$(this.name)
                   .subscribe(l => {
                     if (l.register) {
                       this.registerLayer(l.ref, l.injector);
                     } else {
                       this.unregisterLayer(l.ref);
                     }
                   });
  }

  registerLayer(layer: LayerRef, injector: Injector | undefined) {
    const containerWormholeRef = this.createWormhole(LayerContainerComponent);

    const layerSub = layer.state$.subscribe((state) => {
      if (state.visible && !containerWormholeRef.isConnected) {
        containerWormholeRef.connect({
          attrs: {
            layer,
            zIndex: this.layerService.currentZIndex,
            layerAttrs: state.attrs,
            injector:  injector || this.injector
          }
        });
        this.layerService.addVisibleLayer(layer);
      } else if (state.visible) {
        containerWormholeRef.setAttributes({
          layerAttrs: state.attrs
        });
      } else {
        containerWormholeRef.disconnect();
        this.layerService.removeVisibleLayer(layer);
      }
    });

    this.layerMap.set(layer, {
      subscription: layerSub,
      wormhole: containerWormholeRef
    });
  }

  unregisterLayer(layer: LayerRef) {
    layer.close();
    const meta = this.layerMap.get(layer);
    if (meta) {
      meta.subscription.unsubscribe();
      meta.wormhole.disconnect();
    }
    this.layerMap.delete(layer);
  }

  ngOnDestroy() {
    this.clearWormholes();
    this.layerMap.forEach((meta, layer) => this.unregisterLayer(layer));
    this.sub && this.sub.unsubscribe();
  }
}
