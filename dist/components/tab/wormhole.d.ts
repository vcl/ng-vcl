/// <reference types="core-js" />
import { TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
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
export declare abstract class Wormhole<T> {
    private _attachedHost;
    /** Attach this portal to a host. */
    attach(host: PortalHost): T;
    /** Detach this portal from its host */
    detach(): void;
    /** Whether this portal is attached to a host. */
    readonly isAttached: boolean;
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detatch()`.
     */
    setAttachedHost(host: PortalHost): void;
}
export declare class TemplatePortal extends Wormhole<Map<string, any>> {
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
    locals: Map<string, any>;
    constructor(template: TemplateRef<any>, viewContainerRef: ViewContainerRef);
    readonly origin: ElementRef;
    attach(host: PortalHost, locals?: Map<string, any>): Map<string, any>;
    detach(): void;
}
