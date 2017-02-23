import { NgModule, APP_BOOTSTRAP_LISTENER, Type, Injector, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentType } from './../core/interfaces';
import { VCLOffClickModule } from '../off-click/index';
import { VCLWormholeModule, WormholeService } from '../wormhole/index';
import { LayerBaseComponent, LayerBaseRootComponent } from './layer-base.component';
import { LayerService, LayerOptions } from './layer.service';
import { LayerRef, LayerData } from './layer-ref';
import { LayerWrapperComponent } from './layer-wrapper.component';
import { Layer, getComponentLayerOpts } from './layer-ref.component';
import { LayerRefDirective } from './layer-ref.directive';

export {LayerBaseComponent, LayerRefDirective, LayerRef, LayerData, LayerService, Layer, LayerOptions }

export interface VCLLayerConfig {
  layers?: Type<LayerRef>[];
}

export function bootstrap(wormholeService: WormholeService) {
  return () => {
    wormholeService.attachComponent(LayerBaseRootComponent);
  };
}

export function bootstrapLayers(layerService: LayerService, layer: LayerRef) {
  return () => {
    const opts = getComponentLayerOpts(layer);
    if (!opts) {
      throw 'Invalid layer class in provideLayer()';
    }
    layerService.register(layer, opts);
  };
}

@NgModule({
  imports: [CommonModule, VCLWormholeModule, VCLOffClickModule],
  exports: [LayerBaseComponent, LayerRefDirective],
  declarations: [LayerBaseComponent,  LayerBaseRootComponent, LayerRefDirective, LayerWrapperComponent],
  entryComponents: [ LayerBaseRootComponent,  LayerWrapperComponent],
  providers: [
    LayerService,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [ WormholeService ],
      useFactory: bootstrap
    },
    {
      provide: LayerRef,
      useValue: null
    }
  ]
})
export class VCLLayerModule { }

export function provideLayer(layerCls: Type<LayerRef>): any[] {
  return [
    layerCls,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [LayerService, layerCls ],
      useFactory: bootstrapLayers
    }
  ];
}
