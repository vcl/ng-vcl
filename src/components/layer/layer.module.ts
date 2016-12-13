import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef, ComponentFactoryResolver, Inject, Injector, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerBaseComponent, LayerDirective } from './layer.component';
import { LayerService } from './layer.service';
import { VCLOffClickModule } from '../../directives/off-click/off-click.module';
import { VCLWormholeModule } from '../../directives/wormhole/wormhole.module';

export { LayerBaseComponent, LayerDirective, LayerService };

function getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement {
  return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
}

function bootstrapLayer(appRef: ApplicationRef, componentFactoryResolver: ComponentFactoryResolver, defaultInjector: Injector) {
  return () => {
    const layerBaseFactory = componentFactoryResolver.resolveComponentFactory(LayerBaseComponent);
    const layerBaseRef = layerBaseFactory.create(defaultInjector);
    layerBaseRef.onDestroy(() => {
      appRef.detachView(layerBaseRef.hostView);
    });
    appRef.attachView(layerBaseRef.hostView);

    const rootComponents = appRef['_rootComponents'];
    const rootComponent = rootComponents.length && rootComponents[0];
    if (!rootComponent) {
      console.log('Root View Container not found');
      return;
    }

    const layerBaseRootNode = getComponentRootNode(layerBaseRef);
    const appComponentNode = getComponentRootNode(rootComponent);
    if (appComponentNode && layerBaseRef) {
      appComponentNode.appendChild(layerBaseRootNode);
    }
  };
}

@NgModule({
  imports: [CommonModule, VCLWormholeModule, VCLOffClickModule],
  exports: [LayerBaseComponent, LayerDirective],
  declarations: [LayerBaseComponent, LayerDirective],
  entryComponents: [LayerBaseComponent],
  providers: [
    LayerService,
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      deps: [ ApplicationRef, ComponentFactoryResolver, Injector ],
      useFactory: bootstrapLayer
    }
  ]
})
export class VCLLayerModule { }
