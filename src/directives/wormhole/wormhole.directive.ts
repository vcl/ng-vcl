import { ViewContainerRef, Directive, Input, SimpleChanges, TemplateRef } from '@angular/core';
import { Wormhole, createWormhole } from './wormhole';

@Directive({
  selector: '[wormhole]'
})
export class WormholeDirective {
  private wormhole: Wormhole;

  constructor(private viewContainerRef: ViewContainerRef) { }

  get isConnected() {
    return !!this.wormhole && this.wormhole.isConnected;
  }

  @Input('wormhole')
  target: any;

  @Input('wormholeAttrs')
  attrs: any;

  ngOnChanges(changes: SimpleChanges) {
    const attrs = changes['attrs'] && changes['attrs'].currentValue;

    if (changes['target']) {
      if (this.wormhole) {
        this.wormhole.disconnect();
      }

      const target = changes['target'].currentValue;

      if (target) {
        this.wormhole = createWormhole(this.viewContainerRef, target);
        this.wormhole.connect({
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
