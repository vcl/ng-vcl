import { NgModule, APP_BOOTSTRAP_LISTENER, Type, Injector, ModuleWithProviders, Component, ChangeDetectionStrategy, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentType } from './../core/interfaces';
import { VCLWormholeModule, WormholeService } from '../wormhole/index';
import { LayerBaseComponent } from './layer-base.directive';
import { LayerService } from './layer.service';
import { LayerRef, LayerData } from './layer-ref';
import { LayerContainerComponent } from './layer-container.component';
import { Layer } from './layer-ref.component';
import { LayerRefDirective } from './layer-ref.directive';

export {LayerBaseComponent, LayerRefDirective, LayerRef, LayerData, LayerService, Layer, LayerContainerComponent }

@Component({
  selector: 'vcl-layer-base-root',
  template: '<vcl-layer-base></vcl-layer-base>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayerBaseRootComponent { }

export function bootstrapBase(wormholeService: WormholeService) {
  return () => {
    wormholeService.attachComponent(LayerBaseRootComponent);
  };
}

export function bootstrapLayer(layerService: LayerService, layer: LayerRef) {
  return () => {
    layerService.register(layer);
  };
}

@NgModule({
  imports: [CommonModule, VCLWormholeModule],
  exports: [LayerBaseComponent, LayerRefDirective, LayerContainerComponent],
  declarations: [LayerBaseComponent,  LayerBaseRootComponent, LayerRefDirective, LayerContainerComponent],
  entryComponents: [ LayerBaseRootComponent,  LayerContainerComponent],
  providers: [
    LayerService,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [ WormholeService ],
      useFactory: bootstrapBase
    },
    {
      provide: LayerRef,
      useValue: null
    }
  ]
})
export class VCLLayerModule { }

export function provideLayer(layerClass: Type<LayerRef>): Provider[] {
  return [
    layerClass,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [LayerService, layerClass ],
      useFactory: bootstrapLayer
    }
  ];
}
