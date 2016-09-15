import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class Wormhole {
    protected templateRef: TemplateRef<any>;
    private source;
    constructor(templateRef: TemplateRef<any>);
    readonly isConnected: boolean;
    disconnect(): void;
    connect(wormhole: ConnectWormhole): void;
    getTemplateRef(): TemplateRef<any>;
}
export declare class ConnectWormhole {
    private viewContainerRef;
    private _wormhole;
    private connectedWormhole;
    constructor(viewContainerRef: ViewContainerRef);
    readonly isConnected: boolean;
    wormhole: Wormhole;
    connect(wormhole: Wormhole): void;
    disconnect(): void;
    dispose(): void;
    ngOnDestroy(): void;
}
export declare class VCLWormholeModule {
}
