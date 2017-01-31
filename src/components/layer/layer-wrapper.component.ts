import { Component, ChangeDetectionStrategy, trigger, Input, SimpleChanges, ViewChild, ViewContainerRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Wormhole, ComponentWormhole } from './../../directives/wormhole/wormhole.module';
import { LayerRef, LayerOptions } from './layer-ref';

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

  // workaround
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

  @Output()
  offClick = new EventEmitter();

  wormhole: Wormhole;

  @ViewChild('layerContent', {read: ViewContainerRef})
  layerContent: ViewContainerRef;

  get opts(): LayerOptions {
    return (this.layer && this.layer.opts) || { };
  }

  get visible() {
    return (this.layer && this.layer.visible) || false;
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  // TODO: does not trigger
  // workaround in attrs setter
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['attrs']) {
  //     if (this.wormholeRef) {
  //       this.wormholeRef.setAttributes(changes['attrs'].currentValue);
  //     }
  //   }
  // }

  ngAfterViewInit() {
    if (!this.wormhole && this.layer) {
      this.wormhole = this.layer._createWormhole(this.layerContent);
      if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
        this.wormhole.connect({
          attrs: this._attrs
        });
      } else {
        this.wormhole.connect();
      }
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
