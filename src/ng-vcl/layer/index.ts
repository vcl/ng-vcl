import { NgModule, APP_BOOTSTRAP_LISTENER, Type, Injector, ModuleWithProviders, Component, ChangeDetectionStrategy, Provider, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLWormholeModule, DomWormholeHost } from '../wormhole/index';
import { LayerBaseComponent } from './layer-base.directive';
import { LayerService } from './layer.service';
import { LayerRef, LayerAttributes } from './layer-ref';
import { LayerContainerComponent } from './layer-container.component';
import { Layer } from './layer-ref.component';
import { LayerRefDirective } from './layer-ref.directive';

export {LayerBaseComponent, LayerRefDirective, LayerRef, LayerAttributes, LayerService, Layer, LayerContainerComponent }

export const LAYERS = new OpaqueToken('@ng-vcl/ng-vcl#layers');

@Component({
  selector: 'vcl-layer-base-root',
  template: '<vcl-layer-base></vcl-layer-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerBaseRootComponent { }

export function bootstrapLayers(layerService: LayerService, ...layers: LayerRef[]) {
  return () => {
    (layers || []).forEach(l => layerService.register(l));
  };
};

@NgModule({
  imports: [
    CommonModule,
    VCLWormholeModule.withRootComponents([LayerBaseRootComponent])
  ],
  exports: [LayerBaseComponent, LayerRefDirective, LayerContainerComponent],
  declarations: [LayerBaseComponent,  LayerBaseRootComponent, LayerRefDirective, LayerContainerComponent],
  entryComponents: [ LayerBaseRootComponent,  LayerContainerComponent],
  providers: [
    LayerService,
    {
      provide: LayerRef,
      useValue: null
    },
  ]
})
export class VCLLayerModule {
  static withLayers(layers: Type<LayerRef>[]): ModuleWithProviders {
    return {
      ngModule: VCLLayerModule,
      providers: [
        layers,
        {
          provide: APP_BOOTSTRAP_LISTENER,
          multi: true,
          deps: [ LayerService, layers],
          useFactory: bootstrapLayers
        }
      ]
    };
  }
}
