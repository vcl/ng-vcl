import { NgModule, APP_BOOTSTRAP_LISTENER, OnDestroy, Inject, Injectable, Type, Injector, ModuleWithProviders, Component, ChangeDetectionStrategy, Provider, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLWormholeModule } from '../wormhole/index';
import { defineMetadata } from './../core/index';
import { LayerManagerService } from './layer-manager.service';
import { LayerService } from './layer.service';
import { LayerRef, LayerAttributes } from './layer-ref';
import { LayerContainerComponent, COMPONENT_LAYER_ANNOTATION_ID, LAYER_ANIMATIONS, LayerAnimationConfig } from './layer-container.component';
import { LayerRefDirective } from './layer-ref.directive';

export { LayerRefDirective, LayerRef, LayerAttributes, LayerService, LayerManagerService, LayerContainerComponent, LayerAnimationConfig, LAYER_ANIMATIONS };

export const LAYERS = new OpaqueToken('@ng-vcl/ng-vcl#layers');

export interface RootLayerConfig {
  layers?: Type<LayerRef>[];
}

export interface ChildLayerConfig {
  layers?: Type<LayerRef>[];
}

// The @Layer annotation
export function Layer<T>(component: Type<T>) {
  return function (target) {
    Injectable()(target);
    defineMetadata(COMPONENT_LAYER_ANNOTATION_ID, component, target);
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
        useValue: null
      },
      {
        provide: LAYERS,
        useValue: config.layers
      }
    ]};
  }
  static forChild(config: ChildLayerConfig = {}): ModuleWithProviders {
    return {
      ngModule: VCLLayerModule,
      providers: [
        ...(config.layers || []),
        {
          provide: LAYERS,
          useValue: config.layers
        }
      ]
    };
  }

  constructor(
    @Inject(LAYERS) private layers: Type<LayerRef>[],
    private layerService: LayerService,
    private layerManagerService: LayerManagerService,
    private injector: Injector,
  ) {
    if (layers) {
      (layers || []).forEach(layerCls => {
        const layerRef = this.injector.get(layerCls);
        this.layerService.register(layerRef, injector);
      });
    }
  }
}

