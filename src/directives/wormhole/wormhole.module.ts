import { NgModule, APP_BOOTSTRAP_LISTENER, ModuleWithProviders } from '@angular/core';
import { TemplateWormhole, ComponentWormhole, Wormhole } from './wormhole';
import { TemplateWormholeRef,  ComponentWormholeRef, WormholeRef } from './wormhole.ref';
import { ConnectWormholeDirective } from './connect-wormhole.directive';
import { WormholeService } from './wormhole.service';
import { ComponentType } from './../../core/index';

export { TemplateWormhole, ComponentWormhole, Wormhole, TemplateWormholeRef, ComponentWormholeRef, WormholeRef, ConnectWormholeDirective, WormholeService };

@NgModule({
  exports: [ConnectWormholeDirective, TemplateWormhole],
  declarations: [ConnectWormholeDirective, TemplateWormhole],
  providers: [
    WormholeService,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [ WormholeService ],
      useFactory: (wormholeService: WormholeService) => {
        return () => {
          wormholeService.ready();
        };
      }
    }
  ]
})
export class VCLWormholeModule {
  static withRootComponents(...components: ComponentType<any>[]): ModuleWithProviders {
    return {
      ngModule: VCLWormholeModule,
      providers: [
        {
          provide: APP_BOOTSTRAP_LISTENER,
          multi: true,
          deps: [ WormholeService ],
          useFactory: (wormholeService: WormholeService) => {
            return () => {
              components.forEach(lc => wormholeService.attachComponent(lc));
            };
          }
        }
      ]
    };
  }
}
