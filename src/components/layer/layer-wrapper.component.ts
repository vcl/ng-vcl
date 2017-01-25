import { Component, ChangeDetectionStrategy, trigger, Input, SimpleChanges, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Wormhole, WormholeRef } from './../../directives/wormhole/wormhole.module';
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
  set data(data) {
    this._data = data;
    if (this.wormholeRef) {
      this.wormholeRef.setData(data);
    }
  }
  _data: any;

  @Input()
  baseZIndex: number;

  @Input()
  Zindex = 1000;

  wormholeRef: WormholeRef;

  @ViewChild('layerContent', {read: ViewContainerRef})
  layerContent: ViewContainerRef;

  get opts(): LayerOptions {
    return (this.layer && this.layer.opts) || { };
  }

  get visible() {
    return (this.layer && this.layer.visible) || false;
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  markForCheck() {
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }

  // TODO: does not trigger
  // workaround in data setter
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['data']) {
  //     if (this.wormholeRef) {
  //       this.wormholeRef.setData(changes['data'].currentValue);
  //     }
  //   }
  // }

  ngAfterViewInit() {
    if (!this.wormholeRef && this.layer) {
      this.wormholeRef = this.layer.connect(this.layerContent, this._data);
      this.markForCheck();
    }
  }

  ngOnDestroy() {
    if (this.wormholeRef) {
      this.wormholeRef.disconnect();
    }
  }

  offClick() {
    if (this.layer) {
      this.layer.offClick();
    }
  }
}
