import { NgModule, APP_BOOTSTRAP_LISTENER, ModuleWithProviders, Injector, ViewContainerRef, Type, OpaqueToken } from '@angular/core';
import { TemplateWormhole,  ComponentWormhole, Wormhole, WormholeAttributes } from './wormhole';
import { WormholeDirective } from './wormhole.directive';
import { WormholeHost } from "./wormhole-host";
import { DomWormholeHost } from "./dom-wormhole-host";

export { TemplateWormhole, ComponentWormhole, Wormhole, WormholeAttributes, WormholeDirective, DomWormholeHost, WormholeHost };

export const ROOT_COMPONENTS = new OpaqueToken('@ng-vcl/ng-vcl#wormhole');

export function bootstrapRootComponentWormholes(host: DomWormholeHost, injector: Injector) {
  return () => {
    const components = [].concat.apply([], injector.get(ROOT_COMPONENTS) || []);
    components.forEach(component => host.attachComponentToRoot(component));
  };
};

@NgModule({
  exports: [WormholeDirective],
  declarations: [WormholeDirective],
  providers: [
    DomWormholeHost,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [ DomWormholeHost, Injector],
      useFactory: bootstrapRootComponentWormholes
    }
  ]
})
export class VCLWormholeModule {
  static withRootComponents(components: Type<any>[]): ModuleWithProviders {
    return {
      ngModule: VCLWormholeModule,
      providers: [
        { provide: ROOT_COMPONENTS, useValue: components, multi: true }
      ]
    };
  }
}
