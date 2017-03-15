import { NgModule, APP_BOOTSTRAP_LISTENER, ModuleWithProviders, Injector, ViewContainerRef, Type } from '@angular/core';
import { TemplateWormhole,  ComponentWormhole, Wormhole, WormholeAttributes, createWormhole, WormholeManager, WormholeRef } from './wormhole';
import { WormholeDirective } from './wormhole.directive';
import { WormholeService } from './wormhole.service';

export { TemplateWormhole, ComponentWormhole, Wormhole, WormholeAttributes, WormholeDirective, WormholeService, createWormhole, WormholeManager, WormholeRef };

export function bootstrapWormhole(ws: WormholeService) {
  return () => ws.resolve();
}

@NgModule({
  exports: [WormholeDirective],
  declarations: [WormholeDirective],
  providers: [
    WormholeService,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [ WormholeService ],
      useFactory: bootstrapWormhole
    }
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
          deps: [ WormholeService ],
          useFactory: (wormholeService: WormholeService) => {
            return () => {
              components.forEach(componentClass => wormholeService.attachComponentToRoot(componentClass));
            };
          }
        }
      ]
    };
  }
}
