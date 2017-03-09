import { Component, ChangeDetectionStrategy, trigger, Input, SimpleChanges, ViewChild, ViewContainerRef, ChangeDetectorRef, Output, EventEmitter, ElementRef } from '@angular/core';
import { Wormhole, ComponentWormhole, TemplateWormhole } from '../wormhole/index';
import { ComponentType, getMetadata } from './../core/index';
import { LayerRef } from './layer-ref';
import { LayerRefDirective } from './layer-ref.directive';
import { LayerComponentWormhole, COMPONENT_LAYER_ANNOTATION_ID } from './layer-ref.component';

// Creates a wormhole out of the LayerRef
function createWormhole<T>(viewContainerRef: ViewContainerRef, layerRef: LayerRef): Wormhole {
  if (!viewContainerRef) {
    throw 'viewContainerRef required';
  }
  if (layerRef instanceof LayerRefDirective) {
    return new TemplateWormhole(viewContainerRef, layerRef.templateRef);
  } else {
    const component =  getMetadata(COMPONENT_LAYER_ANNOTATION_ID, (layerRef as any).constructor ) as ComponentType<T>;
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
})
export class LayerContainerComponent {

  @ViewChild('container')
  container: ElementRef;

  @Input()
  layer: LayerRef;

  @Input()
  set attrs(attrs) {
    this._attrs = attrs;
    if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
      this.wormhole.setAttributes(attrs);
    }
  }
  _attrs: any;

  @Input()
  Zindex = 1000;

  wormhole: Wormhole;

  @ViewChild('layerContent', { read: ViewContainerRef })
  layerContentContainer: ViewContainerRef;

  get visible() {
    return (this.layer && this.layer.visible) || false;
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    const layer = this.layer;
    if (!this.wormhole && layer) {
      this.wormhole = createWormhole(this.layerContentContainer, layer);

      if (!this.wormhole) {
        throw 'invalid layer';
      }

      this.wormhole.connect({
        attrs: this._attrs
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
