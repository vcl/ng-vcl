import { ComponentRef, ComponentFactory, EmbeddedViewRef, Directive, TemplateRef, ViewContainerRef, ComponentFactoryResolver, Input, Injector, ChangeDetectorRef } from '@angular/core';
import { ComponentType } from './../../core/index';

export abstract class Wormhole {
  abstract get isConnected(): boolean;
  abstract connect(viewContainerRef: ViewContainerRef);
  abstract disconnect();
}

@Directive({
  selector: '[wormhole]',
  exportAs: 'wormhole',
})
export class TemplateWormhole extends Wormhole {

  viewContainerRef: ViewContainerRef;
  viewRef: EmbeddedViewRef<any>;

  // The wormhole directive needs a reference to the template
  constructor(public templateRef: TemplateRef<any>) {
    super();
  }

  get isConnected() {
    return !!(this.viewRef && this.viewContainerRef);
  }

  connect(viewContainerRef: ViewContainerRef) {
    this.disconnect();
    this.viewContainerRef = viewContainerRef;
    this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.viewRef.onDestroy(() => {
      this.viewRef = null;
    });
  }

  disconnect() {
    if (this.isConnected) {
      const i = this.viewContainerRef.indexOf(this.viewRef);
      if (i >= 0) this.viewContainerRef.remove(i);
    }
  }
}

export class ComponentWormhole<T> extends Wormhole {

  viewContainerRef: ViewContainerRef;
  compFactory: ComponentFactory<T>;
  compRef: ComponentRef<T>;
  injector: Injector;
  data: any;

  constructor(private componentClass: ComponentType<T>, initialData: any = {}) {
    super();
    this.data = initialData;
  }

  get isConnected() {
    return !!(this.compRef && this.viewContainerRef);
  }

  connect(viewContainerRef: ViewContainerRef) {
    this.destroyComponent();
    this.viewContainerRef = viewContainerRef;
    this.initializeComponent();
  }
  disconnect() {
    this.destroyComponent();
  }

  private initializeComponent() {
    if (!this.injector) {
      this.injector = this.createInjector();
    }

    if (!this.compFactory) {
      const componentFactoryResolver = this.injector.get(ComponentFactoryResolver) as ComponentFactoryResolver;
      this.compFactory = componentFactoryResolver.resolveComponentFactory<T>(this.componentClass);
    }

    this.destroyComponent();

    this.compRef = this.viewContainerRef.createComponent( this.compFactory, this.viewContainerRef.length, this.injector);
    this.compRef.onDestroy(() => {
      this.compRef = null;
    });
    if (this.data && typeof this.data === 'object') {
      Object.assign(this.compRef.instance, this.data);
    }
    this.compRef.changeDetectorRef.detectChanges();
  }

  private destroyComponent() {
    if (this.isConnected) {
      const i = this.viewContainerRef.indexOf(this.compRef.hostView);
      if (i >= 0) this.viewContainerRef.remove(i);
    }
  }

  protected createInjector(): Injector {
    return this.viewContainerRef.parentInjector;
  }

  setData(data?: any) {
    this.data = data;
    this.initializeComponent();
  }
}

@Directive({
  selector: '[connectWormhole]'
})
export class ConnectWormholeDirective {
  private wormhole: Wormhole;

  constructor(public viewContainerRef: ViewContainerRef) {}

  get isAttached() {
    return !!this.wormhole;
  }

  // TODO: workaround. Does not disconnect the view when destroying the element when true
  // ngOnDestroy is called before the animations are fully traversed. This would remove the wormhole's ContentChild
  // before its host is removed from the DOM
  @Input('wormholeIndisposable')
  indisposable: boolean = false;

  @Input('connectWormhole')
  set connectWormhole(wormhole: Wormhole) {
    if (this.isAttached) {
      this.detach();
    }
    this.attach(wormhole);
  }

  attach(wormhole: Wormhole) {
    this.wormhole = wormhole;
    wormhole.connect(this.viewContainerRef);
  }

  detach() {
    if (this.isAttached) {
      this.wormhole.disconnect();
    }
  }

  ngOnDestroy() {
    if (this.isAttached && !this.indisposable) {
      this.detach();
    }
  }
}
