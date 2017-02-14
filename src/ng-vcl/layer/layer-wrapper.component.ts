import { Component, ChangeDetectionStrategy, trigger, Input, SimpleChanges, ViewChild, ViewContainerRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Wormhole, ComponentWormhole } from '../wormhole/index';
import { LayerOptions } from './layer.service';
import { LayerRef } from './layer-ref';
import { LayerRefDirective } from './layer-ref.directive';
import { createComponentWormhole } from './layer-ref.component';

@Component({
  templateUrl: 'layer-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('boxState', []),
    trigger('layerState', [])
  ],
})
export class LayerWrapperComponent {

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
  baseZIndex: number;

  @Input()
  Zindex = 1000;

  @Input()
  opts: LayerOptions;

  @Output()
  offClick = new EventEmitter();

  wormhole: Wormhole;

  @ViewChild('layerContent', {read: ViewContainerRef})
  layerContentContainer: ViewContainerRef;

  get visible() {
    return (this.layer && this.layer.visible) || false;
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (!this.wormhole && this.layer) {

      if (this.layer instanceof LayerRefDirective) {
        this.wormhole = this.layer.createWormhole(this.layerContentContainer);
      } else {
        this.wormhole = createComponentWormhole(this.layerContentContainer, this.layer);
      }

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

  triggerOffClick() {
    this.offClick.emit();
  }
}
