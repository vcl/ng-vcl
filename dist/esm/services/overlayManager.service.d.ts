export interface OverlayManagedComponent {
    zIndex: number;
}
export declare class OverlayManagerService {
    private components;
    constructor();
    register(component: OverlayManagedComponent): number;
    unregister(component: OverlayManagedComponent): number;
}
