import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class WormholeGenerator {
    protected templateRef: TemplateRef<any>;
    private source;
    constructor(templateRef: TemplateRef<any>);
    readonly isConnected: boolean;
    disconnect(): void;
    connect(wormhole: Wormhole): void;
    getTemplateRef(): TemplateRef<any>;
}
export declare class Wormhole {
    private viewContainerRef;
    private _wormhole;
    private connectedWormhole;
    constructor(viewContainerRef: ViewContainerRef);
    readonly isConnected: boolean;
    wormhole: WormholeGenerator;
    connect(wormhole: WormholeGenerator): void;
    disconnect(): void;
    dispose(): void;
    ngOnDestroy(): void;
}
