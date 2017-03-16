import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef, trigger, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import { Wormhole, createWormhole } from '../wormhole/index';
import { LayerService } from './layer.service';
import { LayerRef, LayerOptions, LayerAttributes } from './layer-ref';
import { LayerContainerComponent } from './layer-container.component';

@Directive({
  selector: 'vcl-layer-base',
})
export class LayerBaseComponent {

  layerMap = new Map<LayerRef, Wormhole>();
  layerSubscriptions = new Map<LayerRef, Subscription>();
  sub: Subscription;

  visibleLayers: LayerRef[] = [];

  @Input()
  public name: string = 'default';

  @Input()
  public zIndex: number = 1000;

  constructor(private layerService: LayerService, private viewContainerRef: ViewContainerRef) { }

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
    const containerWormholeRef = createWormhole(this.viewContainerRef, LayerContainerComponent);
    this.layerMap.set(layer, containerWormholeRef);

    const layerSub = layer.state$.subscribe((state) => {
      const attrs = {
        layer,
        visible: state.visible,
        layerAttrs: state.attrs
      };

      if (state.visible) {
        this.visibleLayers = [...this.visibleLayers, layer];
        attrs['zIndex'] + this.zIndex + this.visibleLayers.length;
      } else {
        this.visibleLayers = this.visibleLayers.filter(l => l !== layer);
      }

      if (state.visible && !containerWormholeRef.isConnected) {
        containerWormholeRef.connect({attrs});
      } else if (state.visible) {
        containerWormholeRef.setAttributes(attrs);
      } else {
        containerWormholeRef.disconnect();
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
    this.layerService.unregisterBase(this);
    this.layerMap.forEach(layer => layer.disconnect());
    if (this.sub) this.sub.unsubscribe();
  }
}
