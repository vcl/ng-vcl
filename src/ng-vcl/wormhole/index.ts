import { NgModule } from '@angular/core';
import { Wormhole, WormholeAttributes } from './wormhole-base';
import { ComponentWormhole, TemplateWormhole, WormholeEvent } from './wormhole';
import { DomComponentWormhole, DomTemplateWormhole } from './wormhole-dom';
import { WormholeDirective } from './wormhole.directive';
import { DomWormholeHost, WormholeHost } from './wormhole-host';

export { TemplateWormhole, ComponentWormhole, Wormhole, WormholeAttributes, WormholeEvent, WormholeDirective, DomComponentWormhole, DomTemplateWormhole, WormholeHost, DomWormholeHost};

@NgModule({
  exports: [WormholeDirective],
  declarations: [WormholeDirective],
  providers: []
})
export class VCLWormholeModule { }
