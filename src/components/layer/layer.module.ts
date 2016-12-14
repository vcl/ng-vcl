import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef, ComponentFactoryResolver, Inject, Injector, EmbeddedViewRef, ComponentRef, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerBaseComponent, LayerDirective } from './layer.component';
import { LayerService } from './layer.service';
import { VCLOffClickModule } from '../../directives/off-click/off-click.module';
import { VCLWormholeModule, WormholeService } from '../../directives/wormhole/wormhole.module';

export { LayerBaseComponent, LayerDirective, LayerService };

function getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
  return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
}

function bootstrapLayer(wormholeService: WormholeService) {
  return () => {
    wormholeService.attachComponent(LayerBaseComponent);
  };
}

const LAYER_BOOTSTRAP = {
  provide: APP_BOOTSTRAP_LISTENER,
  multi: true,
  deps: [ WormholeService ],
  useFactory: bootstrapLayer
};

@NgModule({
  imports: [CommonModule, VCLWormholeModule, VCLOffClickModule],
  exports: [LayerBaseComponent, LayerDirective],
  declarations: [LayerBaseComponent, LayerDirective],
  entryComponents: [LayerBaseComponent],
  providers: [ LayerService, LAYER_BOOTSTRAP ]
})
export class VCLLayerModule { }
