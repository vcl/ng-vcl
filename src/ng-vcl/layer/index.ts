import { NgModule, APP_BOOTSTRAP_LISTENER, OnDestroy, Inject, Injectable, Type, Injector, ModuleWithProviders, Component, ChangeDetectionStrategy, Provider, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLWormholeModule } from '../wormhole/index';
import { defineMetadata } from './../core/index';
import { LayerManagerService } from './layer-manager.service';
import { LayerService } from './layer.service';
import { LayerRef, LayerAttributes } from './layer-ref';
import { LayerContainerComponent, COMPONENT_LAYER_ANNOTATION_ID } from './layer-container.component';
import { LayerRefDirective } from './layer-ref.directive';

export { LayerRefDirective, LayerRef, LayerAttributes, LayerService, LayerManagerService, LayerContainerComponent }

export const CHILD_LAYER_CONFIG = new OpaqueToken('@ng-vcl/ng-vcl#child_layer_config');

export interface LayerConfig {
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
  static forRoot(config: LayerConfig = {}): ModuleWithProviders {
    return {ngModule: VCLLayerModule, providers: [
      LayerService,
      LayerManagerService,
      ...(config.layers || []),
      {
        provide: LayerRef,
        useValue: null
      },
      {
        provide: CHILD_LAYER_CONFIG,
        multi: true,
        useValue: config
      }
    ]};
  }
  static forChild(config: LayerConfig = {}): ModuleWithProviders {
    return {
      ngModule: VCLLayerModule,
      providers: [
        ...(config.layers || []),
        {
          provide: CHILD_LAYER_CONFIG,
          multi: true,
          useValue: config
        }
      ]
    };
  }

  constructor(
    @Inject(CHILD_LAYER_CONFIG) private configs: LayerConfig[],
    private layerService: LayerService,
    private layerManagerService: LayerManagerService,
    private injector: Injector,
  ) {
    if (configs) {
      configs.forEach(config => {
        (config.layers || []).forEach(layerCls => {
          const layerRef = this.injector.get(layerCls);
          this.layerService.register(layerRef, injector);
        });
      });
    }
  }
}

