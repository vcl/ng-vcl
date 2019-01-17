import { ViewContainerRef, Directive, Input, SimpleChanges, TemplateRef, OnChanges, OnDestroy } from '@angular/core';
import { Wormhole, WormholeAttributes } from './wormhole-base';
import { WormholeHost } from './wormhole-host';

@Directive({
  selector: 'wormhole'
})
export class WormholeDirective extends WormholeHost implements OnChanges, OnDestroy {

  constructor(viewContainerRef: ViewContainerRef) { super(viewContainerRef); }

  get isConnected() {
    return !!this.wormhole && this.wormhole.isConnected;
  }

  // tslint:disable-next-line:no-input-rename
  @Input('connect')
  target: any;

  @Input()
  attrs: WormholeAttributes;

  wormhole: Wormhole;

  ngOnChanges(changes: SimpleChanges) {
    const attrs = ('attrs' in changes && changes['attrs'].currentValue as WormholeAttributes) || undefined;

    if ('target' in changes) {
      this.clearWormholes();

      const target = changes['target'].currentValue;

      if (target) {
        this.wormhole = this.connectWormhole(target, attrs);
      }
    } else if (attrs && this.wormhole) {
      this.wormhole.setAttributes(attrs);
    }
  }

  ngOnDestroy() {
    if (this.wormhole) {
      this.wormhole.disconnect();
    }
  }
}
