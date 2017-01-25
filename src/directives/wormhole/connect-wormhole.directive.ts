import { ViewContainerRef, Directive, Input, SimpleChanges } from '@angular/core';
import { WormholeRef } from './wormhole.ref';
import { Wormhole } from './wormhole';

@Directive({
  selector: '[connectWormhole]'
})
export class ConnectWormholeDirective {
  private wormholeRef: WormholeRef;

  constructor(private viewContainerRef: ViewContainerRef) { }

  get isConnected() {
    return !!this.wormholeRef && this.wormholeRef.isConnected;
  }

  @Input('connectWormhole')
  wormhole: Wormhole;

  @Input('wormholeData')
  data: any;

  ngOnChanges(changes: SimpleChanges) {
    const data = changes['data'] && changes['data'].currentValue;

    if (changes['wormhole']) {
      const wormhole = changes['wormhole'].currentValue as Wormhole;

      if (this.wormholeRef) {
        this.wormholeRef.disconnect();
      }

      this.wormholeRef = wormhole.connect(this.viewContainerRef, data);
    } else if (data) {
      this.wormholeRef.setData(data);
    }
  }

  ngOnDestroy() {
    if (this.wormholeRef) {
      this.wormholeRef.disconnect();
    }
  }
}
