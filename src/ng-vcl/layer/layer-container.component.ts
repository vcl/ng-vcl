import { Component, ChangeDetectionStrategy, trigger, Input, SimpleChanges, ViewChild, ViewContainerRef, ChangeDetectorRef, Output, EventEmitter, ElementRef, Type, ViewChildren, QueryList } from '@angular/core';
import { Wormhole, ComponentWormhole, TemplateWormhole } from '../wormhole/index';
import { getMetadata } from './../core/index';
import { LayerRef, LayerOptions, LayerAttributes } from './layer-ref';
import { LayerRefDirective } from './layer-ref.directive';
import { LayerComponentWormhole, COMPONENT_LAYER_ANNOTATION_ID } from './layer-ref.component';

// Creates a wormhole out of the LayerRef
function createWormhole<T>(viewContainerRef: ViewContainerRef, layerRef: LayerRef): Wormhole | null {
  if (!viewContainerRef) {
    throw 'viewContainerRef required';
  }
  if (layerRef instanceof LayerRefDirective) {
    return new TemplateWormhole(viewContainerRef, layerRef.templateRef);
  } else {
    const component =  getMetadata(COMPONENT_LAYER_ANNOTATION_ID, (layerRef as any).constructor ) as Type<T>;
    return component ? new LayerComponentWormhole<T>(layerRef, viewContainerRef, component) : null;
  }
}

@Component({
  templateUrl: 'layer-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('boxState', []),
    trigger('layerState', [])
  ],
  host: {
    '[@boxState]': 'true',
    '[@layerState]': 'true'
  }
})
export class LayerContainerComponent {

  @ViewChild('container')
  container: ElementRef;

  @Input()
  layer: LayerRef;

  @Input()
  set layerAttrs(layerAttrs: LayerAttributes) {
    this._layerAttrs = layerAttrs;
    if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
      this.wormhole.setAttributes(layerAttrs);
    }
  }
  get layerAttrs() {
    return this._layerAttrs;
  }
  _layerAttrs: LayerAttributes;

  @Input()
  Zindex = 1000;

  @Input()
  visible: boolean = false;

  get state() {
    return this.visible ? 'visible' : 'hidden';
  }

  wormhole: Wormhole | null;

  @ViewChild('layerContent', { read: ViewContainerRef })
  layerContentContainer: ViewContainerRef;

  constructor(private cdRef: ChangeDetectorRef) { }

  disconnect() {
    if (this.wormhole) {
      this.wormhole.disconnect();
    }
  }

  connect() {
    if (this.wormhole) {
      this.wormhole.connect();
    }
  }

  ngAfterViewInit() {
    const layer = this.layer;
    if (layer) {
      this.wormhole = createWormhole(this.layerContentContainer, layer);

      if (!this.wormhole) {
        throw 'invalid layer';
      }

      this.wormhole.connect({
        attrs: this._layerAttrs
      });
    }
  }

  ngOnDestroy() {
    if (this.wormhole) {
      this.wormhole.disconnect();
    }
  }

  triggerOffClick(event) {
    if (event.target === this.container.nativeElement) {
      this.layer.offClick();
    }
  }
}
