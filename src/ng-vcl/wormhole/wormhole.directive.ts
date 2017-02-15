import { ViewContainerRef, Directive, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Wormhole, WormholeManager, WormholeRef } from './wormhole';

@Directive({
  selector: '[wormhole]'
})
export class WormholeDirective extends WormholeManager {

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef);
   }

  get isConnected() {
    return !!this.wormhole && this.wormhole.isConnected;
  }

  @Input('wormhole')
  target: any;

  @Input('wormholeAttrs')
  attrs: any;

  wormhole: WormholeRef;

  ngOnChanges(changes: SimpleChanges) {
    const attrs = changes['attrs'] && changes['attrs'].currentValue;

    if (changes['target']) {
      if (this.wormhole) {
        this.wormhole.disconnect();
      }

      const target = changes['target'].currentValue;

      if (target) {
        this.wormhole = this.connect(target, {
          attrs
        });
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
