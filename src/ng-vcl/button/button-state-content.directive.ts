import { ViewContainerRef, Directive, TemplateRef, Input, EmbeddedViewRef } from '@angular/core';
import { Wormhole } from "../wormhole/index";

@Directive({
  selector: '[vclButtonStateContent]'
})
export class ButtonStateContentDirective {
  private wormhole: Wormhole;
  constructor(viewContainerRef: ViewContainerRef, tempRef: TemplateRef<any>) {
     this.wormhole = Wormhole.create(viewContainerRef, tempRef);
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
