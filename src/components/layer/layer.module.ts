import { NgModule, APP_BOOTSTRAP_LISTENER, Type, Injector, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentType } from './../../core/interfaces';
import { VCLOffClickModule } from '../../directives/off-click/off-click.module';
import { VCLWormholeModule, WormholeService } from '../../directives/wormhole/wormhole.module';
import { DirectiveLayerRef } from './layer.directive';
import { ComponentLayerRef } from './layer.component';
import { LayerBaseComponent } from './layer-base.component';
import { LayerService } from './layer.service';
import { LayerRef, LayerData } from './layer.references';

export {LayerBaseComponent, DirectiveLayerRef, ComponentLayerRef, LayerRef, LayerData, LayerService}

export interface VCLLayerConfig {
  layers?: Type<ComponentLayerRef<any>>[];
}

const LAYER_BOOTSTRAP: any[] = [{
  provide: APP_BOOTSTRAP_LISTENER,
  multi: true,
  deps: [ WormholeService, LayerService ],
  useFactory: (wormholeService: WormholeService) => {
    return () => {
      wormholeService.attachComponent(LayerBaseComponent);
    };
  }
}];

@NgModule({
  imports: [CommonModule, VCLWormholeModule, VCLOffClickModule],
  exports: [LayerBaseComponent, DirectiveLayerRef],
  declarations: [LayerBaseComponent, DirectiveLayerRef],
  entryComponents: [LayerBaseComponent],
  providers: [
    LayerService,
    ...LAYER_BOOTSTRAP,
    {
      provide: LayerRef,
      useValue: null
    }
  ]
})
export class VCLLayerModule {
  static withConfig(config: VCLLayerConfig): ModuleWithProviders {
    const layers = config.layers || [];
    return {
      ngModule: VCLLayerModule,
      providers: [
        ...layers,
        {
          provide: APP_BOOTSTRAP_LISTENER,
          multi: true,
          deps: [LayerService, Injector, ...layers ],
          useFactory: (layerService, injector, ...layers: ComponentLayerRef<any>[]) => {
            return () => {
              layers.forEach(layer => layer.initialize(layerService));
            };
          }
        }
      ]
    };
  }
}
