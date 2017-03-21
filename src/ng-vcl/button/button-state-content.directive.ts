import { ViewContainerRef, Directive, TemplateRef, Input, EmbeddedViewRef } from '@angular/core';
import { Wormhole, WormholeHost } from "../wormhole/index";

@Directive({
  selector: '[vclButtonStateContent]'
})
export class ButtonStateContentDirective extends WormholeHost {
  private wormhole: Wormhole;
  constructor(viewContainerRef: ViewContainerRef, private tempRef: TemplateRef<any>) {
    super(viewContainerRef);
    this.wormhole = this.createWormhole(this.tempRef);
  }

  @Input('vclButtonStateContent')
  set state(value: string | string[]) {
    this.states = (typeof value === 'string' ? [value] : value) || [];
  }
  states: string[] = ['enabled'];

  updateState(state: string) {
    if (this.states.includes(state)) {
      this.wormhole.connect();
    } else {
      this.wormhole.disconnect();
    }
  }
}
