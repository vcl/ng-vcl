import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { EventEmitter, TemplateRef, ElementRef } from '@angular/core';
import { Wormhole } from './../../directives/wormhole';
import { LayerService } from './layer.service';
export declare class LayerBaseComponent {
    private layerService;
    visibleLayers: any[];
    sub: Subscription;
    constructor(layerService: LayerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class LayerDirective extends Wormhole {
    protected templateRef: TemplateRef<any>;
    private elementRef;
    private layerService;
    visibilityChange$: EventEmitter<boolean>;
    readonly visibilityChange: Observable<boolean>;
    modal: boolean;
    name: string;
    readonly state: string;
    visible: boolean;
    coverzIndex: number;
    zIndex: number;
    constructor(templateRef: TemplateRef<any>, elementRef: ElementRef, layerService: LayerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    offClick(): void;
    setZIndex(zIndex?: number): void;
    toggle(): void;
    open(): void;
    close(): void;
}
