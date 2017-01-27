import { Component, Input, Output, EventEmitter, Directive, TemplateRef, ElementRef, trigger, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/debounceTime';
import { WormholeRef, ComponentWormhole } from './../../directives/wormhole/wormhole.module';
import { LayerService } from './layer.service';
import { LayerRef } from './layer-ref';
import { LayerWrapperComponent } from './layer-wrapper.component';

const LayerWrapperWormhole = new ComponentWormhole(LayerWrapperComponent);

@Directive({
  selector: 'vcl-layer-base',
})
export class LayerBaseComponent {

  layerMap = new Map<LayerRef, WormholeRef>();
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
    const wrapperWormholeRef = LayerWrapperWormhole.create(this.viewContainerRef);
    this.layerMap.set(layer, wrapperWormholeRef);

    const sub = layer.state$.subscribe(data => {
      if (layer.visible && !wrapperWormholeRef.isConnected) {
        this.visibleLayers = [...this.visibleLayers, layer ];
        wrapperWormholeRef.connect(null, {
          layer,
          zIndex: this.zIndex + this.viewContainerRef.length,
          data
        });

      } else if (layer.visible && wrapperWormholeRef.isConnected) {
        wrapperWormholeRef.setData({data});
      } else if (!layer.visible && wrapperWormholeRef.isConnected) {
        this.visibleLayers = this.visibleLayers.filter(l => l !== layer);
        wrapperWormholeRef.disconnect();
      }
    });

    this.layerSubscriptions.set(layer, sub);
  }

  unregisterLayer(layer: LayerRef) {
    layer.close();
    const sub = this.layerSubscriptions.get(layer);
    if (sub && !sub.closed) sub.unsubscribe();
    this.layerMap.delete(layer);
  }

  ngOnDestroy() {
    debugger;
    this.layerService.unregisterBase(this);
    this.layerMap.forEach(layer => layer.disconnect());
    if (this.sub && !this.sub.closed) this.sub.unsubscribe();
  }
}

@Component({
  selector: 'vcl-layer-base-root',
  template: '<vcl-layer-base></vcl-layer-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerBaseRootComponent { }
