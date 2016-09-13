import {
    TemplateRef,
    ViewContainerRef,
    ElementRef,
    ComponentRef,
    Injector
} from '@angular/core';


/**
 * A `PortalHost` is an space that can contain a single `Portal`.
 */
export interface PortalHost {
  attach(portal: Wormhole<any>): any;

  detach(): any;

  dispose(): void;

  hasAttached(): boolean;
}

/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalHost`.
 */
export abstract class Wormhole<T> {
  private _attachedHost: PortalHost;

  /** Attach this portal to a host. */
  attach(host: PortalHost): T {
    this._attachedHost = host;
    return <T> host.attach(this);
  }

  /** Detach this portal from its host */
  detach(): void {
    let host = this._attachedHost;
    this._attachedHost = null;
    return host.detach();
  }

  /** Whether this portal is attached to a host. */
  get isAttached(): boolean {
    return this._attachedHost != null;
  }

  /**
   * Sets the PortalHost reference without performing `attach()`. This is used directly by
   * the PortalHost when it is performing an `attach()` or `detatch()`.
   */
  setAttachedHost(host: PortalHost) {
    this._attachedHost = host;
  }
}


export class TemplatePortal extends Wormhole<Map<string, any>> {
  /** The embedded template that will be used to instantiate an embedded View in the host. */
  templateRef: TemplateRef<any>;

  /** Reference to the ViewContainer into which the template will be stamped out. */
  viewContainerRef: ViewContainerRef;

  /**
   * Additional locals for the instantiated embedded view.
   * These locals can be seen as "exports" for the template, such as how ngFor has
   * index / event / odd.
   * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
   */
  locals: Map<string, any> = new Map<string, any>();

  constructor(template: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super();
    this.templateRef = template;
    this.viewContainerRef = viewContainerRef;
  }

  get origin(): ElementRef {
    return this.templateRef.elementRef;
  }

  attach(host: PortalHost, locals?: Map<string, any>): Map<string, any> {
    this.locals = locals == null ? new Map<string, any>() : locals;
    return super.attach(host);
  }

  detach(): void {
    this.locals = new Map<string, any>();
    return super.detach();
  }
}
