import { NgModule, APP_BOOTSTRAP_LISTENER, ModuleWithProviders, Injector, ViewContainerRef, Type, OpaqueToken } from '@angular/core';
import { Wormhole, WormholeAttributes } from './wormhole-base';
import { TemplateWormhole,  ComponentWormhole } from './wormhole';
import { DomComponentWormhole, DomTemplateWormhole } from './wormhole-dom';
import { WormholeDirective } from './wormhole.directive';
import { WormholeHost, DomWormholeHost } from "./wormhole-host";

export { TemplateWormhole, ComponentWormhole, Wormhole, WormholeAttributes, WormholeDirective, DomComponentWormhole, DomTemplateWormhole, WormholeHost, DomWormholeHost};

@NgModule({
  exports: [WormholeDirective],
  declarations: [WormholeDirective],
  providers: []
})
export class VCLWormholeModule { }
