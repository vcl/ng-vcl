import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef, trigger, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import { Wormhole, WormholeHost } from '../wormhole/index';
import { LayerService } from './layer.service';
import { LayerRef, LayerOptions, LayerAttributes } from './layer-ref';
import { LayerContainerComponent } from './layer-container.component';

@Directive({
  selector: 'vcl-layer-base',
})
export class LayerBaseComponent extends WormholeHost {

  layerMap = new Map<LayerRef, Wormhole>();
  layerSubscriptions = new Map<LayerRef, Subscription>();
  sub: Subscription;

  visibleLayers: LayerRef[] = [];

  @Input()
  public name: string = 'default';

  @Input()
  public zIndex: number = 1000;

  constructor(private layerService: LayerService, viewContainerRef: ViewContainerRef) { super(viewContainerRef); }

  ngOnInit() {
    this.layerService.registerBase(this);

    this.sub = this.layerService
                   .getLayers$(this.name)
                   .subscribe(l => {
                     if (l.register) {
                       this.registerLayer(l.ref);
                     } else {
                       this.unregisterLayer(l.ref);
                     }
                   });
  }

  getLayers() {
    return Array.from(this.layerMap.keys());
  }

  registerLayer(layer: LayerRef) {
    const containerWormholeRef = this.createWormhole(LayerContainerComponent);
    this.layerMap.set(layer, containerWormholeRef);

    const layerSub = layer.state$.subscribe((state) => {
      if (state.visible && !containerWormholeRef.isConnected) {
        containerWormholeRef.connect({
          attrs: {
            layer,
            zIndex: this.zIndex + (this.visibleLayers.length * 10),
            layerAttrs: state.attrs
          }
        });
        this.visibleLayers = [...this.visibleLayers, layer];
      } else if (state.visible) {
        containerWormholeRef.setAttributes({
          layerAttrs: state.attrs
        });
      } else {
        containerWormholeRef.disconnect();
        this.visibleLayers = this.visibleLayers.filter(l => l !== layer);
      }
    });

    this.layerSubscriptions.set(layer, layerSub);
  }

  unregisterLayer(layer: LayerRef) {
    layer.close();
    const sub = this.layerSubscriptions.get(layer);
    if (sub) sub.unsubscribe();
    this.layerMap.delete(layer);
    this.layerSubscriptions.delete(layer);
  }

  ngOnDestroy() {
    this.clearWormholes();
    this.layerService.unregisterBase(this);
    this.layerMap.forEach(layer => layer.disconnect());
    if (this.sub) this.sub.unsubscribe();
  }
}
