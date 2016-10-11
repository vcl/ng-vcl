import { EventEmitter, ElementRef } from '@angular/core';
export declare class OffClickDirective {
    private elem;
    offClick: EventEmitter<{}>;
    private listener;
    constructor(elem: ElementRef);
    createListener(): (event: any) => void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
export declare class VCLOffClickModule {
}
