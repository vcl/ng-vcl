import { NgModule, APP_BOOTSTRAP_LISTENER, ModuleWithProviders, Injector, ViewContainerRef, Type, OpaqueToken } from '@angular/core';
import { TemplateWormhole,  ComponentWormhole, Wormhole, WormholeAttributes, DomComponentWormhole } from './wormhole';
import { WormholeDirective } from './wormhole.directive';
import { WormholeHost, DomWormholeHost } from "./wormhole-host";

export { TemplateWormhole, ComponentWormhole, Wormhole, WormholeAttributes, WormholeDirective, DomComponentWormhole, WormholeHost, DomWormholeHost};

@NgModule({
  exports: [WormholeDirective],
  declarations: [WormholeDirective],
  providers: []
})
export class VCLWormholeModule { }
