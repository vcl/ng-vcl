import { ActivatedRoute } from '@angular/router';
import { Component, Directive, Input, ComponentFactoryResolver, ViewContainerRef, Type, ComponentRef } from '@angular/core';

@Directive({
  selector: 'demo-content',
})
export class DemoContentComponent {
  @Input()
  component: Type<{}>;
  currentComponentRef: ComponentRef<{}>;

  constructor(
    private vcRef: ViewContainerRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnChanges() {
    if (this.currentComponentRef) {
      this.currentComponentRef.destroy();
    }
    this.currentComponentRef = this.attachComponentPortal(this.component);
  }

  ngOnDestroy() {
    if (this.currentComponentRef) {
      this.currentComponentRef.destroy();
    }
  }

    /** Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver. */
  attachComponentPortal<T>(cmp: Type<T>): ComponentRef<T> {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory<T>(cmp);
    return this.vcRef.createComponent(componentFactory, this.vcRef.length, this.vcRef.parentInjector);
  }
}

@Component({
  templateUrl: 'demo.component.html'
})
export class DemoComponent {

  title: string;
  tabs: {name: string, content: string}[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe( (data: any) => {
      if (data && data.label ) {
        this.title = data.label;
        if (data.tabs) {
          this.tabs = Object.keys(data.tabs).map(key => {

            let type;
            if (typeof data.tabs[key] === 'string' && key.endsWith('.md')) {
              type = 'markdown';
            } else if (typeof data.tabs[key] === 'string') {
              type = 'text';
            } else if (typeof data.tabs[key] === 'function') {
              type = 'component';
            }

            return {
              name: key,
              content: data.tabs[key],
              type
            };
        });
        } else {
          this.tabs = [];
        }
      } else {
        this.title = null;
        this.tabs = [];
      }
    });
  }
}
