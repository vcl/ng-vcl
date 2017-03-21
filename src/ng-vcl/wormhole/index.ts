import { NgModule, APP_BOOTSTRAP_LISTENER, ModuleWithProviders, Injector, ViewContainerRef, Type } from '@angular/core';
import { TemplateWormhole,  ComponentWormhole, Wormhole, WormholeAttributes } from './wormhole';
import { WormholeDirective } from './wormhole.directive';
import { WormholeHost } from "./wormhole-host";
import { DomWormholeHost } from "./dom-wormhole-host";

export { TemplateWormhole, ComponentWormhole, Wormhole, WormholeAttributes, WormholeDirective, DomWormholeHost, WormholeHost };

@NgModule({
  exports: [WormholeDirective],
  declarations: [WormholeDirective],
  providers: [
    DomWormholeHost
  ]
})
export class VCLWormholeModule {
  static withRootComponents(...components: Type<any>[]): ModuleWithProviders {
    return {
      ngModule: VCLWormholeModule,
      providers: [
        {
          provide: APP_BOOTSTRAP_LISTENER,
          multi: true,
          deps: [ DomWormholeHost ],
          useFactory: (host: DomWormholeHost) => {
            return () => {
              components.forEach(componentClass => host.attachComponentToRoot(componentClass));
            };
          }
        }
      ]
    };
  }
}
