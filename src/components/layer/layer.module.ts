import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef, ComponentFactoryResolver, Inject, Injector, EmbeddedViewRef, ComponentRef, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerDirective } from './layer.directive';
import { LayerBaseComponent } from './layer-base.component';
import { LayerService } from './layer.service';
import { VCLOffClickModule } from '../../directives/off-click/off-click.module';
import { VCLWormholeModule, WormholeService } from '../../directives/wormhole/wormhole.module';
import { LayerRef, LayerOptions, LayerData } from './layer.references';

export {LayerBaseComponent, LayerDirective, LayerRef, LayerData, LayerOptions, LayerService}

const LAYER_BOOTSTRAP = {
  provide: APP_BOOTSTRAP_LISTENER,
  multi: true,
  deps: [ WormholeService ],
  useFactory: (wormholeService: WormholeService) => {
    return () => {
      wormholeService.attachComponent(LayerBaseComponent);
    };
  }
};

@NgModule({
  imports: [CommonModule, VCLWormholeModule, VCLOffClickModule],
  exports: [LayerBaseComponent, LayerDirective],
  declarations: [LayerBaseComponent, LayerDirective],
  entryComponents: [LayerBaseComponent],
  providers: [
    LayerService,
    LAYER_BOOTSTRAP,
    {
      provide: LayerRef,
      useValue: null
    }
  ]
})
export class VCLLayerModule { }
