import { ComponentFactory, EmbeddedViewRef, ComponentRef, ApplicationRef, Type, TemplateRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { ComponentWormholeBase, TemplateWormholeBase } from './wormhole-base';

function getViewRootNode(embeddedViewRef: EmbeddedViewRef<any>) {
  const rootNodes = embeddedViewRef.rootNodes;
  return (rootNodes && rootNodes.length && rootNodes[0] as HTMLElement) || undefined;
}

function getComponentRootNode(componentRef: ComponentRef<any>) {
  return getViewRootNode(<EmbeddedViewRef<any>> componentRef.hostView);
}

export class DomComponentWormhole<T> extends ComponentWormholeBase<T> {

  private compFactory: ComponentFactory<T>;

  constructor(componentClass: Type<T>, private appRef: ApplicationRef, private node?: HTMLElement, private injector?: Injector) {
    super(componentClass);
  }

  get rootComponentRef(): ComponentRef<any> {
    const rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
    if (!rootComponent) {
      throw new Error('Application root component not found');
    }
    return rootComponent;
  }

  attach(componentClass: Type<T>, index?: number): ComponentRef<T> {
    const injector = this.injector || this.rootComponentRef.injector;
    if (!this.compFactory) {
      const componentFactoryResolver = injector.get(ComponentFactoryResolver) as ComponentFactoryResolver;
      this.compFactory = componentFactoryResolver.resolveComponentFactory<T>(componentClass);
    }

    const compRef = this.compFactory.create(injector);
    this.appRef.attachView(compRef.hostView);
    const compRefRootNode = getComponentRootNode(compRef);

    const node = this.node || getComponentRootNode(this.rootComponentRef);

    if (!compRefRootNode) {
      throw new Error('component root node not found');
    }
    if (!node) {
      throw new Error('root node not found');
    }

    node.appendChild(compRefRootNode);
    return compRef;
  }

  detach() {
    if (this.compRef) {
      this.compRef.destroy();
    }
  }

  get currentIndex() {
    return this.compRef ? 0 : -1;
  }
}


export class DomTemplateWormhole extends TemplateWormholeBase {

  // The wormhole directive needs a reference to the template
  constructor(templateRef: TemplateRef<any>, private appRef: ApplicationRef, private node?: HTMLElement, private injector?: Injector) {
    super(templateRef);
  }


  get rootComponentRef(): ComponentRef<any> {
    const rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
    if (!rootComponent) {
      throw new Error('Application root component not found');
    }
    return rootComponent;
  }

  protected attach(templateRef: TemplateRef<any>, index?: number): EmbeddedViewRef<any> {
    const injector = this.injector || this.rootComponentRef.injector;

    const embeddedView = templateRef.createEmbeddedView(undefined);
    this.appRef.attachView(embeddedView);
    const compRefRootNode = getViewRootNode(embeddedView);

    const node = this.node || getComponentRootNode(this.rootComponentRef);

    if (!compRefRootNode) {
      throw new Error('component root node not found');
    }
    if (!node) {
      throw new Error('root node not found');
    }

    node.appendChild(compRefRootNode);
    return embeddedView;
  }


  protected detach() {
    if (this.viewRef && this.currentIndex >= 0) {
      this.viewRef.destroy();
    }
  }

  get currentIndex() {
    return this.viewRef ? 0 : -1;
  }
}
