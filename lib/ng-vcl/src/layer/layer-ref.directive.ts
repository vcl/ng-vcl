import { Input, TemplateRef, Directive, Injector, OnInit, OnDestroy } from '@angular/core';
import { WormholeEvent } from './../wormhole/index';
import { LayerRef } from './layer-ref';
import { LayerOptions } from './layer-container.component';
import { LayerManagerService } from './layer-manager.service';

@Directive({
  selector: '[vcl-layer]',
  exportAs: 'layer',
})
export class LayerRefDirective extends LayerRef implements OnInit, OnDestroy, LayerOptions {

  @Input()
  modal: boolean;

  @Input()
  transparent: boolean;

  @Input()
  fill: boolean;

  @Input()
  stickToBottom: boolean;

  @Input()
  gutterPadding: boolean;

  @Input()
  customClass: string;

  @Input()
  noLayerBox: boolean;

  constructor(public templateRef: TemplateRef<any>, private layerManager: LayerManagerService, private injector: Injector) {
    super();
  }

  ngOnInit() {
    this.layerManager._register(this, this.templateRef, this.injector, this);
  }

  ngOnDestroy() {
    this.layerManager._unregister(this);
  }

  event(_event: WormholeEvent) {
    // Not required for template components
  }
}

