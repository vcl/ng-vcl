import { ComponentType } from '@angular/cdk/portal';
import {
  Injectable,
  Injector,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { ComponentLayerRef, LayerRef, TemplateLayerRef } from './layer-ref';
import { LayerConfig, LayerData } from './types';

@Injectable({
  providedIn: 'root',
})
export class LayerService {
  constructor(private injector: Injector) {}

  createTemplateLayer(
    templateRef: TemplateRef<any>,
    viewContainerRef: ViewContainerRef,
    _config?: LayerConfig
  ): LayerRef {
    class DynamicTemplateLayerRef extends TemplateLayerRef {
      protected get templateRef(): TemplateRef<any> {
        return templateRef;
      }
      protected get viewContainerRef(): ViewContainerRef {
        return viewContainerRef;
      }

      createLayerConfig(config?: LayerConfig) {
        return super.createLayerConfig(_config, config);
      }
    }
    return new DynamicTemplateLayerRef(this.injector);
  }

  openTemplateLayer(
    templateRef: TemplateRef<any>,
    viewContainerRef: ViewContainerRef,
    config?: LayerConfig
  ): LayerRef {
    const layer = this.createTemplateLayer(templateRef, viewContainerRef);
    layer.open(config);
    return layer;
  }

  create<TComponent = any, TData extends LayerData = any, TResult = any>(
    component: ComponentType<TComponent>,
    _config?: LayerConfig
  ): LayerRef<TData, TResult> {
    class DynamicComponentLayerRef extends ComponentLayerRef {
      getComponent() {
        return component;
      }
      createLayerConfig(config?: LayerConfig) {
        return super.createLayerConfig(_config, config);
      }
    }
    return new DynamicComponentLayerRef(this.injector);
  }

  open<TComponent = any, TData extends LayerData = any, TResult = any>(
    component: ComponentType<TComponent>,
    config?: LayerConfig
  ): LayerRef<TData, TResult> {
    const layer = this.create(component);
    layer.open(config);
    return layer;
  }
}
