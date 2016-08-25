import { EventEmitter, ElementRef } from '@angular/core';
import { OverlayManagerService, OverlayManagedComponent } from '../../services/overlayManager.service';
export declare class LayerComponent implements OverlayManagedComponent {
    private overlayManger;
    private myElement;
    open: boolean;
    openChange: EventEmitter<boolean>;
    modal: boolean;
    zIndex: number;
    private coverZIndex;
    constructor(overlayManger: OverlayManagerService, myElement: ElementRef);
    close(): void;
    onClick(event: any): void;
    ngOnChanges(changes: any): void;
}
