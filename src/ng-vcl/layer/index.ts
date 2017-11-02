import { Inject, Injectable, InjectionToken, Injector, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLWormholeModule } from '../wormhole/index';
import { defineMetadata, getMetadata } from './../core/index';
import { LayerManagerService } from './layer-manager.service';
import { LayerService } from './layer.service';
import { DynamicLayerRef, LayerAttributes, LayerRef, LayerResult } from './layer-ref';
import { COMPONENT_LAYER_ANNOTATION_ID, LAYER_ANIMATIONS, LayerAnimationConfig, LayerContainerComponent, LayerMeta, LayerOptions } from './layer-container.component';
import { LayerRefDirective } from './layer-ref.directive';

export { LayerRefDirective, LayerRef, LayerAttributes, LayerService, LayerContainerComponent, DynamicLayerRef, LayerAnimationConfig, LAYER_ANIMATIONS, LayerResult };

export const LAYERS = new InjectionToken('@ng-vcl/ng-vcl#layers');

export interface RootLayerConfig {
  layers?: Type<LayerRef>[];
}

export interface ChildLayerConfig {
  layers?: Type<LayerRef>[];
}

// The @Layer annotation
export function Layer<T>(component: Type<T>, opts?: LayerOptions) {
  return function (target) {
    Injectable()(target);
    defineMetadata(COMPONENT_LAYER_ANNOTATION_ID, {component, opts}, target);
  };
}

@NgModule({
  imports: [
    CommonModule,
    VCLWormholeModule
  ],
  exports: [LayerRefDirective, LayerContainerComponent],
  declarations: [LayerRefDirective, LayerContainerComponent],
  entryComponents: [LayerContainerComponent],
  providers: []
})
export class VCLLayerModule {
  static forRoot(config: RootLayerConfig = {}): ModuleWithProviders {
    return {ngModule: VCLLayerModule, providers: [
      LayerService,
      LayerManagerService,
      ...(config.layers || []),
      {
        provide: LayerRef,
        useValue: undefined
      },
      {
        provide: LAYERS,
        useValue: config.layers,
        multi: true
      }
    ]};
  }
  static forChild(config: ChildLayerConfig = {}): ModuleWithProviders {
    return {
      ngModule: VCLLayerModule,
      providers: [
        LayerService,
        ...(config.layers || []),
        {
          provide: LAYERS,
          useValue: config.layers,
          multi: true
        }
      ]
    };
  }

  constructor(
    @Inject(LAYERS) layers: Type<LayerRef>[],
    layerManager: LayerManagerService,
    injector: Injector,
  ) {
    if (layers) {
      // Flatten and filter layer classes
      layers = [].concat.apply([], layers).filter(layerCls => layerCls !== undefined);
      layers.forEach(layerCls => {
          const layerMeta = <LayerMeta> getMetadata(COMPONENT_LAYER_ANNOTATION_ID, layerCls);
          const layerRef = injector.get(layerCls);
          if (layerMeta && layerRef) {
            layerManager._register(layerRef, layerMeta.component, injector, layerMeta.opts);
          }
      });
    }
  }
}
