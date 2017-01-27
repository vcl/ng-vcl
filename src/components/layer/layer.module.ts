import { NgModule, APP_BOOTSTRAP_LISTENER, Type, Injector, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentType } from './../../core/interfaces';
import { VCLOffClickModule } from '../../directives/off-click/off-click.module';
import { VCLWormholeModule, WormholeService } from '../../directives/wormhole/wormhole.module';
import { LayerBaseComponent, LayerBaseRootComponent } from './layer-base.component';
import { LayerService } from './layer.service';
import { LayerRef, LayerData, LayerOptions } from './layer-ref';
import { LayerWrapperComponent } from './layer-wrapper.component';
import { ComponentLayerRef, Layer, getComponentLayerOpts } from './layer-ref.component';
import { LayerRefDirective } from './layer-ref.directive';

export {LayerBaseComponent, LayerRefDirective, ComponentLayerRef, LayerRef, LayerData, LayerService, Layer, LayerOptions }

export interface VCLLayerConfig {
  layers?: Type<ComponentLayerRef<any>>[];
}

const LAYER_BOOTSTRAP: any[] = [{
  provide: APP_BOOTSTRAP_LISTENER,
  multi: true,
  deps: [ WormholeService, LayerService ],
  useFactory: (wormholeService: WormholeService) => {
    return () => {
      wormholeService.attachComponent(LayerBaseRootComponent);
    };
  }
}];

@NgModule({
  imports: [CommonModule, VCLWormholeModule, VCLOffClickModule],
  exports: [LayerBaseComponent, LayerRefDirective],
  declarations: [LayerBaseComponent,  LayerBaseRootComponent, LayerRefDirective, LayerWrapperComponent],
  entryComponents: [ LayerBaseRootComponent,  LayerWrapperComponent],
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
    const layerClasses = config.layers || [];
    return {
      ngModule: VCLLayerModule,
      providers: [
        ...layerClasses,
        {
          provide: APP_BOOTSTRAP_LISTENER,
          multi: true,
          deps: [LayerService, ...layerClasses ],
          useFactory: (layerService: LayerService, ...layers: ComponentLayerRef<any>[]) => {
            return () => {
              layers.forEach(layer => {
                const opts = getComponentLayerOpts(layer);
                if (!opts) {
                  throw 'Invalid layer class in VCLLayerConfig.layers';
                }
                layer._setOptions(opts);
                layerService.register(layer);
              });
            };
          }
        }
      ]
    };
  }
}
